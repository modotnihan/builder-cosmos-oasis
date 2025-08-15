import * as React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { BagVoyageCard, BagVoyageCardContent, BagVoyageCardHeader, BagVoyageCardTitle } from "@/components/ui/bagvoyage-card"
import { BagVoyageButton } from "@/components/ui/bagvoyage-button"
import { BagVoyageBadge } from "@/components/ui/bagvoyage-badge"

export default function RetrieveScan() {
  const matchedBags = [
    { id: "1234567890", name: "John Smith" },
    { id: "9900123456", name: "Aisha R." },
    { id: "8812334455", name: "Lee W." },
  ]

  return (
    <div className="min-h-screen bg-bagvoyage-background">
      <div className="max-w-5xl mx-auto p-4">
        {/* Main Container */}
        <BagVoyageCard className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="w-full border-b border-bagvoyage-border bg-gradient-header rounded-t-2xl px-6 py-7">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex flex-col gap-1 text-bagvoyage-text-secondary hover:text-bagvoyage-text-primary transition-colors">
                  <div className="flex items-center gap-1">
                    <ChevronLeft className="w-4 h-4" />
                  </div>
                  <span className="font-bold text-sm">Home</span>
                </Link>
                <div>
                  <h1 className="text-2xl font-bold text-bagvoyage-text-primary">Retrieve –</h1>
                  <h1 className="text-2xl font-bold text-bagvoyage-text-primary">Scan</h1>
                </div>
              </div>
              
              <div className="text-base text-bagvoyage-text-secondary max-w-xs">
                Scans are matched by <span className="font-bold">Date + Flight</span> across<br />
                all clients.
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Camera Section */}
              <div className="lg:col-span-2">
                <div className="bg-bagvoyage-scan border border-dashed border-bagvoyage-border-dashed rounded-2xl p-4 h-[410px] relative">
                  {/* Viewfinder with orange gradient */}
                  <div className="bg-gradient-scan-orange rounded-2xl border border-bagvoyage-border-dashed p-4 h-80 relative">
                    <div className="viewfinder-overlay rounded-lg w-56 h-40 mx-auto mt-20 bg-transparent"></div>
                  </div>
                  
                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 flex gap-4">
                    <BagVoyageButton variant="secondary" size="sm">
                      Torch
                    </BagVoyageButton>
                    <BagVoyageButton variant="secondary" size="sm">
                      Exit
                    </BagVoyageButton>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="space-y-6">
                {/* Match Result */}
                <BagVoyageCard>
                  <BagVoyageCardHeader>
                    <BagVoyageCardTitle className="text-lg">Match Result</BagVoyageCardTitle>
                    <BagVoyageBadge variant="unmatched">UNMATCHED</BagVoyageBadge>
                  </BagVoyageCardHeader>
                  <BagVoyageCardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-bagvoyage-text-secondary">Scanned</div>
                      <div className="text-base text-bagvoyage-text-primary">4532019987</div>
                    </div>
                    <div className="flex justify-between">
                      <div className="text-sm text-bagvoyage-text-secondary">Closest</div>
                      <div className="text-xs text-bagvoyage-text-primary">—</div>
                    </div>
                    <div>
                      <div className="text-sm text-bagvoyage-text-secondary">Flight</div>
                      <div className="text-base text-bagvoyage-text-primary">Q2 201</div>
                    </div>
                    <div className="flex gap-2 pt-2">
                      <BagVoyageButton size="sm">Continue</BagVoyageButton>
                    </div>
                    <div className="pt-2">
                      <BagVoyageButton variant="secondary" size="sm">
                        Open Details
                      </BagVoyageButton>
                    </div>
                  </BagVoyageCardContent>
                </BagVoyageCard>

                {/* Matched Bags */}
                <BagVoyageCard>
                  <BagVoyageCardHeader>
                    <BagVoyageCardTitle className="text-lg">Matched Bags</BagVoyageCardTitle>
                  </BagVoyageCardHeader>
                  <BagVoyageCardContent>
                    <div className="space-y-2.5">
                      {matchedBags.map((bag) => (
                        <div 
                          key={bag.id}
                          className="bg-bagvoyage-item border border-bagvoyage-border rounded-full px-3 py-3"
                        >
                          <div className="text-base text-bagvoyage-text-primary">
                            <span className="font-normal">{bag.id} —</span>
                            <br />
                            <span className="font-bold">{bag.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </BagVoyageCardContent>
                </BagVoyageCard>
              </div>
            </div>
          </div>
        </BagVoyageCard>
      </div>
    </div>
  )
}
