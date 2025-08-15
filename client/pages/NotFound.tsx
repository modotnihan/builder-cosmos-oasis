import { Link } from "react-router-dom";
import { BagVoyageCard, BagVoyageCardContent, BagVoyageCardHeader, BagVoyageCardTitle } from "@/components/ui/bagvoyage-card";
import { BagVoyageButton } from "@/components/ui/bagvoyage-button";
import { Logo } from "@/components/ui/logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bagvoyage-background flex items-center justify-center p-4">
      <BagVoyageCard className="w-full max-w-md">
        <BagVoyageCardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <Logo size="lg" />
          </div>
          <BagVoyageCardTitle className="text-2xl">Page Not Found</BagVoyageCardTitle>
          <p className="text-bagvoyage-text-secondary">
            The page you're looking for doesn't exist or is currently under development.
          </p>
        </BagVoyageCardHeader>
        <BagVoyageCardContent className="text-center">
          <Link to="/">
            <BagVoyageButton className="w-full">
              Return to Home
            </BagVoyageButton>
          </Link>
        </BagVoyageCardContent>
      </BagVoyageCard>
    </div>
  );
}
