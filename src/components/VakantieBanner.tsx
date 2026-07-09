import { Phone, Truck } from "lucide-react";

const VakantieBanner = () => {
  // Toon van 8 juli t/m 23 juli 2026 (Europe/Amsterdam)
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

  const isVisible = today >= "2026-07-08" && today <= "2026-07-23";
  if (!isVisible) return null;

  return (
    <section className="section-gradient-blush py-6 md:py-8 border-y-2 border-blush">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <span className="inline-block text-xs uppercase tracking-[0.2em] text-primary font-semibold">
            Vakantiemelding
          </span>
          <h2 className="heading-md">
            Onze winkel is gesloten van 8 t/m 23 juli 2026
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto flex items-start justify-center gap-2">
            <Truck className="w-5 h-5 shrink-0 text-primary mt-0.5" />
            <span>
              Wij zijn wél bereikbaar via de website en bezorgen ook tijdens de
              vakantie graag jouw bestelling.
            </span>
          </p>
          <a
            href="tel:0651343023"
            className="inline-flex items-center gap-2 text-primary font-semibold text-lg hover:underline"
          >
            <Phone className="w-5 h-5" />
            06 51 34 30 23
          </a>
        </div>
      </div>
    </section>
  );
};

export default VakantieBanner;
