import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-5 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-b from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 shadow-soft hover:shadow-medium",
        destructive: "bg-gradient-to-b from-destructive to-destructive/80 text-destructive-foreground hover:from-destructive/90 hover:to-destructive/70",
        outline: "border-2 border-primary bg-gradient-to-b from-transparent to-primary/5 text-primary hover:from-primary hover:to-primary/85 hover:text-primary-foreground",
        secondary: "bg-gradient-to-b from-secondary to-secondary/70 text-secondary-foreground hover:from-secondary/90 hover:to-secondary/60",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-b from-primary to-primary/75 text-primary-foreground hover:from-primary/90 hover:to-primary/65 shadow-medium hover:shadow-hover text-lg px-8 py-4",
        accent: "bg-gradient-to-b from-accent to-accent/70 text-accent-foreground hover:from-accent/80 hover:to-accent/60 shadow-soft",
        warm: "bg-gradient-to-b from-blush-dark to-blush text-foreground hover:from-blush-dark/90 hover:to-blush/80 shadow-soft hover:shadow-medium",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 rounded-md px-4 text-sm",
        lg: "h-14 rounded-lg px-10 text-lg",
        xl: "h-16 rounded-lg px-12 text-xl",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
