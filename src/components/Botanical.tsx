import { cn } from "@/lib/utils";

type Props = { className?: string };

/** Fijn lijn-madeliefje — het terugkerende herkenningselement. */
export const Daisy = ({ className }: Props) => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth={1.4} strokeLinecap="round" aria-hidden="true" className={cn("botanical", className)}>
    {Array.from({ length: 12 }).map((_, i) => (
      <ellipse key={i} cx="32" cy="17" rx="4.2" ry="11" transform={`rotate(${i * 30} 32 32)`} />
    ))}
    <circle cx="32" cy="32" r="6" fill="currentColor" fillOpacity={0.25} />
  </svg>
);

/** Madeliefje op een gebogen steel met twee blaadjes. */
export const DaisyStem = ({ className }: Props) => (
  <svg viewBox="0 0 120 260" fill="none" stroke="currentColor" strokeWidth={1.3} strokeLinecap="round" aria-hidden="true" className={cn("botanical", className)}>
    <path d="M60 258 C 58 200, 70 150, 62 70" />
    <path d="M61 190 C 40 178, 26 160, 22 140 C 42 146, 56 162, 61 190Z" />
    <path d="M64 140 C 82 130, 94 112, 98 94 C 80 100, 68 116, 64 140Z" />
    <path d="M61 205 C 50 196, 46 186, 46 176" />
    <g transform="translate(30 6)">
      {Array.from({ length: 12 }).map((_, i) => (
        <ellipse key={i} cx="32" cy="18" rx="4.4" ry="12" transform={`rotate(${i * 30} 32 32)`} />
      ))}
      <circle cx="32" cy="32" r="6.5" fill="currentColor" fillOpacity={0.25} />
    </g>
  </svg>
);

/** Fijne takjes-rank voor hoeken en langs foto's. */
export const Sprig = ({ className }: Props) => (
  <svg viewBox="0 0 200 120" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" aria-hidden="true" className={cn("botanical", className)}>
    <path d="M4 112 C 60 100, 120 70, 196 10" />
    {[[40, 100, -1], [70, 88, 1], [100, 72, -1], [130, 54, 1], [160, 34, -1]].map(([x, y, s], i) => (
      <path key={i} d={`M${x} ${y} c ${6 * s} -18, ${20 * s} -24, ${30 * s} -24 c -4 ${14}, ${-14 * s} 22, ${-30 * s} 24Z`} />
    ))}
  </svg>
);

/** Kleine scheiding: lijn — madeliefje — lijn. */
export const DaisyDivider = ({ className }: Props) => (
  <div className={cn("flex items-center justify-center gap-3", className)} aria-hidden="true">
    <span className="h-px w-10 bg-blush-dark/60" />
    <Daisy className="w-5 h-5 botanical-blush" />
    <span className="h-px w-10 bg-blush-dark/60" />
  </div>
);
