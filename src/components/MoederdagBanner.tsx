import { useMemo } from "react";
import { isMoederdagActief } from "@/lib/moederdag";

export default function MoederdagBanner() {
  const actief = useMemo(() => isMoederdagActief(), []);

  if (!actief) return null;

  return (
    <div className="bg-primary text-primary-foreground py-2.5 px-4 text-center shadow-md relative z-[45]">
      <p className="text-sm font-semibold tracking-wide">
        🌷 Moederdag: <span className="font-bold">10% korting op bezorging</span> + zondag levering!
      </p>
    </div>
  );
}
