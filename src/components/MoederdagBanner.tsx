import { useMemo } from "react";
import { isMoederdagActief } from "@/lib/moederdag";
import { Gift } from "lucide-react";

export default function MoederdagBanner() {
  const actief = useMemo(() => isMoederdagActief(), []);

  if (!actief) return null;

  return (
    <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-500 text-white py-3 px-4 relative z-[60]">
      <div className="container-custom flex items-center justify-center gap-3 text-center">
        <Gift className="w-5 h-5 shrink-0" />
        <p className="text-sm md:text-base font-medium">
          🌷 Speciaal voor Moederdag: <span className="font-bold">10% korting op bezorging</span> en ook levering op zondag!
        </p>
        <Gift className="w-5 h-5 shrink-0 hidden sm:block" />
      </div>
    </div>
  );
}
