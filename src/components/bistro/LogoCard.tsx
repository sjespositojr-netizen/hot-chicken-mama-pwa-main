export function LogoCard() {
  return (
    <div className="mx-auto mt-5 max-w-xl px-5">
      <div className="flex items-center justify-center rounded-2xl border border-white/5 bg-[#0D0D0D] py-4">
        <img
          src="/photos/logo-full.png"
          alt="Hot Chicken Mama logo"
          className="h-auto w-full object-contain"
          style={{ maxWidth: "220px" }}
        />
      </div>
    </div>
  );
}
