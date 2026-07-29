import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";

const APP_NAME = "Hot Chicken Mama";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
}

function isIosSafari() {
  if (typeof window === "undefined") return false;
  const ua = window.navigator.userAgent.toLowerCase();
  const isIos = /iphone|ipad|ipod/.test(ua);
  const isSafari = /safari/.test(ua) && !/crios|fxios|opera|edgios|edg/.test(ua);
  return isIos && isSafari;
}

function isStandaloneMode() {
  if (typeof window === "undefined") return false;
  return (
    window.navigator.standalone === true ||
    window.matchMedia("(display-mode: standalone)").matches
  );
}

export function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isIosBannerVisible, setIsIosBannerVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isInstalling, setIsInstalling] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt as EventListener);
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isDismissed) return;

    const shouldShowIosBanner = isIosSafari() && !isStandaloneMode();
    setIsIosBannerVisible(shouldShowIosBanner);
  }, [isDismissed]);

  const promptInstall = async () => {
    if (!deferredPrompt) return;

    setIsInstalling(true);
    try {
      await deferredPrompt.prompt();
      await deferredPrompt.userChoice;
    } catch {
      // Ignore errors from the native prompt.
    } finally {
      setDeferredPrompt(null);
      setIsInstalling(false);
    }
  };

  const handleDismiss = () => {
    setIsIosBannerVisible(false);
    setIsDismissed(true);
  };

  const showAndroidPrompt = Boolean(deferredPrompt);

  const content = useMemo(() => {
    if (showAndroidPrompt) {
      return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Install {APP_NAME}</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Add the app to your home screen for faster access.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              className="min-w-[8rem]"
              onClick={promptInstall}
              disabled={isInstalling}
            >
              {isInstalling ? "Installing…" : "Add to Home Screen"}
            </Button>
            <button
              type="button"
              onClick={() => setDeferredPrompt(null)}
              className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground"
            >
              Dismiss
            </button>
          </div>
        </div>
      );
    }

    if (isIosBannerVisible) {
      return (
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-foreground">Install on iOS</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Tap the Share button and choose “Add to Home Screen” for quick access.
            </p>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            className="text-xs text-muted-foreground underline-offset-2 hover:text-foreground"
          >
            Got it
          </button>
        </div>
      );
    }

    return null;
  }, [showAndroidPrompt, isIosBannerVisible, isInstalling, deferredPrompt]);

  if (!showAndroidPrompt && !isIosBannerVisible) {
    return null;
  }

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 rounded-3xl border border-border bg-background/95 p-4 shadow-xl shadow-black/10 backdrop-blur-xl sm:left-1/2 sm:max-w-2xl sm:-translate-x-1/2">
      {content}
    </div>
  );
}
