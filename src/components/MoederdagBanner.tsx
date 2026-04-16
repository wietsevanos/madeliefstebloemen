import { useMemo } from "react";
import { isMoederdagActief } from "@/lib/moederdag";

export default function MoederdagBanner() {
  const actief = useMemo(() => isMoederdagActief(), []);

  if (!actief) return null;

  return (
    <div className="bg-primary text-primary-foreground py-3 px-4 text-center shadow-md relative z-[45]">
      <p className="text-base md:text-lg font-semibold tracking-wide">
        🌸 Moederdag: 10% korting op bezorging + zondag levering
      </p>
    </div>
  );
}
