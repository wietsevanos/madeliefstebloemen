import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: (flip: () => void) => ReactNode;
  back: (flip: () => void) => ReactNode;
  className?: string;
  /** Duration in ms */
  duration?: number;
}

/**
 * Herbruikbare 3D flipcard. Front en back zijn volledig onafhankelijk,
 * de flip-functionaliteit blijft identiek voor elk gebruik.
 */
const FlipCard = ({ front, back, className, duration = 700 }: FlipCardProps) => {
  const [flipped, setFlipped] = useState(false);
  const flip = () => setFlipped((f) => !f);

  return (
    <div
      className={cn("relative h-full [perspective:1600px]", className)}
    >
      <div
        className="relative grid h-full transition-transform ease-[cubic-bezier(0.22,1,0.36,1)] [transform-style:preserve-3d]"
        style={{
          transitionDuration: `${duration}ms`,
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="col-start-1 row-start-1 [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          aria-hidden={flipped}
        >
          {front(flip)}
        </div>
        {/* Back */}
        <div
          className="col-start-1 row-start-1 [transform:rotateY(180deg)] [backface-visibility:hidden] [-webkit-backface-visibility:hidden]"
          aria-hidden={!flipped}
        >
          {back(flip)}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
