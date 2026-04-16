import { useMemo } from "react";
import { isMoederdagActief } from "@/lib/moederdag";

export default function MoederdagBanner() {
  const actief = useMemo(() => isMoederdagActief(), []);

  if (!actief) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[hsl(340,30%,18%)] via-[hsl(345,35%,25%)] to-[hsl(340,30%,18%)] py-5 px-4">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/15 rounded-full blur-3xl" />
      </div>
      <div className="container-custom relative z-10 text-center">
        <p className="font-heading text-base md:text-lg text-white/90 tracking-wide">
          Speciaal voor <span className="italic">Moederdag</span>
          <span className="mx-2 text-white/40">—</span>
          <span className="font-semibold text-white">10% korting op bezorging</span>
          <span className="mx-2 text-white/40">&</span>
          <span className="text-white/90">ook levering op zondag</span>
        </p>
      </div>
    </div>
  );
}
