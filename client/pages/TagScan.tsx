import * as React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { BagVoyageCard, BagVoyageCardContent, BagVoyageCardHeader, BagVoyageCardTitle } from "@/components/ui/bagvoyage-card"
import { BagVoyageButton } from "@/components/ui/bagvoyage-button"
import { BagVoyageInput } from "@/components/ui/bagvoyage-input"
import { BagVoyageBadge } from "@/components/ui/bagvoyage-badge"

export default function TagScan() {
  const recentTags = [
    { id: "1234567890", status: "matched" },
    { id: "4532019987", status: "unmatched" },
    { id: "9900123456", status: "matched" },
    { id: "7712345012", status: "unmatched" },
  ]

  return (
    <div className="min-h-screen bg-bagvoyage-background">
      <div className="max-w-5xl mx-auto p-4">
        {/* Main Container */}
        <BagVoyageCard className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="w-full border-b border-bagvoyage-border bg-gradient-header rounded-t-2xl px-4 md:px-6 py-7">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-1 text-bagvoyage-text-secondary hover:text-bagvoyage-text-primary transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="font-bold">Home</span>
                </Link>
                <h1 className="text-xl md:text-2xl font-bold text-bagvoyage-text-primary">Tag – Scan</h1>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <BagVoyageInput
                  placeholder="Client name"
                  className="w-full sm:w-48"
                />
                <BagVoyageButton variant="secondary">
                  Manual Entry
                </BagVoyageButton>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Camera Section */}
              <div className="lg:col-span-2">
                <div className="bg-bagvoyage-scan border border-dashed border-bagvoyage-border-dashed rounded-2xl p-4 h-[410px] relative">
                  {/* Viewfinder */}
                  <div className="bg-gradient-scan-blue rounded-2xl border border-bagvoyage-border-dashed p-4 h-80 relative">
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
                {/* Last Scan */}
                <BagVoyageCard>
                  <BagVoyageCardHeader>
                    <BagVoyageCardTitle className="text-lg">Last Scan</BagVoyageCardTitle>
                    <BagVoyageBadge variant="matched">MATCH</BagVoyageBadge>
                  </BagVoyageCardHeader>
                  <BagVoyageCardContent className="space-y-3">
                    <div>
                      <div className="text-sm text-bagvoyage-text-secondary">Tag</div>
                      <div className="text-base text-bagvoyage-text-primary">1234567890</div>
                    </div>
                    <div className="flex gap-4">
                      <div>
                        <div className="text-sm text-bagvoyage-text-secondary">Client</div>
                        <div className="text-base text-bagvoyage-text-primary">John</div>
                        <div className="text-base text-bagvoyage-text-primary">Smith</div>
                      </div>
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
                        View All
                      </BagVoyageButton>
                    </div>
                  </BagVoyageCardContent>
                </BagVoyageCard>

                {/* Recent Tags */}
                <BagVoyageCard>
                  <BagVoyageCardHeader>
                    <BagVoyageCardTitle className="text-lg">Recent Tags</BagVoyageCardTitle>
                  </BagVoyageCardHeader>
                  <BagVoyageCardContent>
                    <div className="space-y-2.5">
                      {recentTags.map((tag) => (
                        <div 
                          key={tag.id}
                          className="flex items-center justify-between bg-bagvoyage-item border border-bagvoyage-border rounded-xl p-3"
                        >
                          <span className="text-base text-bagvoyage-text-primary">{tag.id}</span>
                          <div className={`w-2.5 h-2.5 rounded-full ${
                            tag.status === "matched" ? "bg-brand-green" : "bg-brand-orange"
                          }`}></div>
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
