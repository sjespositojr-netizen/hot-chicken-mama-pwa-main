export default function LocationMap() {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.765951467987!2d-73.0287206!3d40.76331165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e849931d70a229%3A0xdf4a96e3ca802bb4!2sHot%20Chicken%20Mama!5e0!3m2!1sen!2sus!4v1785085024315!5m2!1sen!2sus";
  const directionsUrl = "https://www.google.com/maps/dir/?api=1&destination=Hot+Chicken+Mama";
  const today = new Date().getDay();
  const hoursList = [
    {
      label: "Monday – Saturday",
      time: "12:00 PM – 9:00 PM",
      active: today >= 1 && today <= 6,
    },
    {
      label: "Sunday",
      time: "12:00 PM – 7:00 PM",
      active: today === 0,
    },
  ];

  return (
    <section id="location" className="mx-auto mt-10 max-w-xl px-5">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-card shadow-md">
        <iframe
          title="Hot Chicken Mama Location"
          src={mapUrl}
          className="w-full h-72 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-foreground">Hot Chicken Mama</p>
            <p className="mt-1 text-sm text-muted-foreground">Tap below for turn-by-turn directions</p>
          </div>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_20px_rgba(227,28,35,0.5)] transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_30px_rgba(227,28,35,0.8)]"
          >
            Directions 📍
          </a>
        </div>
      </div>

      <div className="mt-5 overflow-hidden rounded-3xl border border-white/10 bg-card shadow-md">
        <div className="px-6 py-5">
          <p className="text-lg font-semibold text-foreground">Hours</p>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {hoursList.map((entry) => (
              <div
                key={entry.label}
                className={`flex h-full flex-col justify-between rounded-2xl border p-4 ${
                  entry.active
                    ? "border-primary/20 bg-primary/5"
                    : "border-white/10 bg-card"
                }`}
              >
                <p className="text-sm font-bold text-foreground">{entry.label}</p>
                <p className="mt-3 text-sm text-muted-foreground">{entry.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
