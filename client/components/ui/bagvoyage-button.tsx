import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-gradient-primary text-bagvoyage-text-primary border border-brand-blue-border hover:opacity-90",
        secondary: "bg-bagvoyage-button-secondary text-bagvoyage-text-primary border border-bagvoyage-button-border hover:bg-opacity-80",
        ghost: "hover:bg-bagvoyage-card hover:text-bagvoyage-text-primary",
        link: "text-bagvoyage-text-secondary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-4 py-3.5",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-14 rounded-xl px-6",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const BagVoyageButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
BagVoyageButton.displayName = "BagVoyageButton"

export { BagVoyageButton, buttonVariants }
