"use client";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";
import { RESTAURANT } from "@/data/menu";

const SCHEDULE = {
  sunday: { start: 720, end: 1140, closeLabel: "7 PM" },
  weekday: { start: 720, end: 1260, closeLabel: "9 PM" },
};

function getMinutesSinceMidnight(date: Date) {
  return date.getHours() * 60 + date.getMinutes();
}

function getStatus(date: Date) {
  const day = date.getDay();
  const schedule = day === 0 ? SCHEDULE.sunday : SCHEDULE.weekday;
  const minutes = getMinutesSinceMidnight(date);
  const isOpen = minutes >= schedule.start && minutes < schedule.end;
  const statusText = isOpen ? "OPEN NOW" : "CLOSED";
  const detailText = isOpen
    ? `Closes at ${schedule.closeLabel}`
    : minutes < schedule.start
    ? "Opens Today at 12 PM"
    : "Opens Tomorrow at 12 PM";

  return {
    isOpen,
    statusText,
    detailText,
    closeLabel: schedule.closeLabel,
  };
}

export function TopOrderBar() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const interval = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(interval);
  }, []);

  const { isOpen, statusText, detailText } = getStatus(now);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="mx-auto flex max-w-xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center">
        <div className="flex min-w-0 items-center gap-3 sm:basis-[30%] sm:max-w-[30%]">
          <span
            className={`relative inline-flex h-3.5 w-3.5 flex-none rounded-full ${
              isOpen
                ? "bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.6)]"
                : "bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.6)]"
            }`}
          >
            {isOpen ? (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" aria-hidden="true" />
            ) : null}
          </span>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold uppercase tracking-[0.3em] text-foreground">
              {statusText}
            </p>
            <p className="truncate text-[11px] text-muted-foreground">{detailText}</p>
          </div>
        </div>

        <a
          href={RESTAURANT.orderUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex min-w-0 flex-1 w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] ${
            isOpen
              ? "bg-primary text-primary-foreground shadow-[0_0_20px_rgba(227,28,35,0.5)] hover:shadow-[0_0_30px_rgba(227,28,35,0.8)]"
              : "bg-slate-600 text-white shadow-[0_2px_12px_rgba(15,23,42,0.35)] hover:bg-slate-500"
          }`}
        >
          <ShoppingBag size={18} />
          {isOpen ? "Order Now" : "View Menu"}
        </a>
      </div>
    </div>
  );
}
