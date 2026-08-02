import { Phone, CalendarDays } from "lucide-react";

const VakantieBanner = () => {
  // Toon t/m 13 augustus 2026 (Europe/Amsterdam), daarna automatisch verborgen
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Amsterdam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const y = parts.find((p) => p.type === "year")?.value;
  const m = parts.find((p) => p.type === "month")?.value;
  const d = parts.find((p) => p.type === "day")?.value;
  const today = `${y}-${m}-${d}`;

  const isVisible = today <= "2026-08-13";
  if (!isVisible) return null;

  const regels = [
    { dag: "Vrijdag 7 augustus", status: "Geopend", open: true },
    { dag: "Zaterdag 8 augustus", status: "Geopend", open: true },
    { dag: "9 t/m 12 augustus", status: "Gesloten wegens vakantie", open: false },
    {
      dag: "Vanaf donderdag 13 augustus 2026",
      status: "Weer geopend volgens de normale openingstijden",
      open: true,
    },
  ];

  return (
    <section className="section-gradient-blush py-10 md:py-14">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto bg-card rounded-3xl p-6 md:p-10 shadow-[var(--shadow-medium)]">
          <div className="text-center space-y-3 mb-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary font-semibold">
              <CalendarDays className="w-4 h-4" />
              Vakantieopeningstijden
            </span>
            <h2 className="heading-md">Vakantieopeningstijden Bloemenwinkel</h2>
          </div>

          <ul className="space-y-3">
            {regels.map((r) => (
              <li
                key={r.dag}
                className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 rounded-2xl px-5 py-4 ${
                  r.open ? "bg-sage/20" : "bg-blush/40"
                }`}
              >
                <span className="text-base md:text-lg">{r.dag}</span>
                <span className="text-base md:text-lg text-muted-foreground sm:text-right">
                  {r.status}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-6 text-center">
            <a
              href="tel:0651343023"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 section-gradient-sage text-primary font-semibold text-lg shadow-[var(--shadow-soft)] hover-lift"
            >
              <Phone className="w-5 h-5" />
              06 51 34 30 23
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VakantieBanner;
