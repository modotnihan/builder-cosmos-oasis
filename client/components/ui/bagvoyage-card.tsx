import * as React from "react"
import { cn } from "@/lib/utils"

const BagVoyageCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-2xl border border-bagvoyage-border bg-bagvoyage-card text-bagvoyage-text-primary shadow-bagvoyage",
      className
    )}
    {...props}
  />
))
BagVoyageCard.displayName = "BagVoyageCard"

const BagVoyageCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
BagVoyageCardHeader.displayName = "BagVoyageCardHeader"

const BagVoyageCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight text-bagvoyage-text-primary",
      className
    )}
    {...props}
  />
))
BagVoyageCardTitle.displayName = "BagVoyageCardTitle"

const BagVoyageCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-bagvoyage-text-secondary", className)}
    {...props}
  />
))
BagVoyageCardDescription.displayName = "BagVoyageCardDescription"

const BagVoyageCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
BagVoyageCardContent.displayName = "BagVoyageCardContent"

const BagVoyageCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
BagVoyageCardFooter.displayName = "BagVoyageCardFooter"

export {
  BagVoyageCard,
  BagVoyageCardHeader,
  BagVoyageCardFooter,
  BagVoyageCardTitle,
  BagVoyageCardDescription,
  BagVoyageCardContent,
}
