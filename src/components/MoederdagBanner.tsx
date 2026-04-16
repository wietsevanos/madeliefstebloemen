import { useMemo } from "react";
import { isMoederdagActief } from "@/lib/moederdag";
import { Gift } from "lucide-react";

export default function MoederdagBanner() {
  const actief = useMemo(() => isMoederdagActief(), []);

  if (!actief) return null;

  return (
    <div className="bg-gradient-to-r from-blush via-accent/30 to-blush border-b-2 border-accent/40 py-3 px-4 relative z-[45]">
      <div className="container-custom flex items-center justify-center gap-3 text-center">
        <Gift className="w-5 h-5 shrink-0 text-accent" />
        <p className="text-sm md:text-base font-medium text-foreground">
          🌷 Speciaal voor Moederdag: <span className="font-bold text-primary">10% korting op bezorging</span> en ook levering op zondag!
        </p>
        <Gift className="w-5 h-5 shrink-0 hidden sm:block text-accent" />
      </div>
    </div>
  );
}
