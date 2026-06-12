import boeketAsset from "@/assets/boeket-van-de-dag.jpg.asset.json";

const BoeketVanDeDagBanner = () => {
  // Toon alleen op 13 juni (Europe/Amsterdam), automatisch onzichtbaar vanaf 14 juni
  const now = new Date();
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Amsterdam",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(now);
  const month = parts.find((p) => p.type === "month")?.value;
  const day = parts.find((p) => p.type === "day")?.value;

  if (!(month === "06" && day === "13")) return null;

  return (
    <section className="section-gradient-blush py-10 md:py-14">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto bg-card shadow-soft overflow-hidden grid grid-cols-1 md:grid-cols-2">
          <div className="aspect-square md:aspect-auto md:h-full overflow-hidden">
            <img
              src={boeketAsset.url}
              alt="Boeket van de dag - kleurrijk boeket met clematis en asters"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center p-6 md:p-10">
            <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">
              Vandaag bij ons
            </span>
            <h2 className="heading-lg mb-3">Boeket van de dag</h2>
            <p className="text-3xl md:text-4xl font-heading text-primary font-semibold">
              € 14,50
            </p>
            <p className="text-muted-foreground text-sm mt-4 max-w-xs">
              Vers samengesteld met seizoensbloemen — alleen vandaag verkrijgbaar in de winkel.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoeketVanDeDagBanner;
