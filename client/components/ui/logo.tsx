import * as React from "react"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, size = "md", ...props }, ref) => {
    const sizeClasses = {
      sm: "w-8 h-8 text-sm",
      md: "w-11 h-11 text-base",
      lg: "w-16 h-16 text-xl"
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center rounded-xl bg-gradient-brand",
          sizeClasses[size],
          className
        )}
        {...props}
      >
        <span className="font-bold text-[#08121A]">BV</span>
      </div>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }
