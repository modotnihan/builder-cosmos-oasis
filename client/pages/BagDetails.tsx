import * as React from "react"
import { Link } from "react-router-dom"
import { ChevronLeft } from "lucide-react"
import { BagVoyageCard, BagVoyageCardContent, BagVoyageCardHeader, BagVoyageCardTitle } from "@/components/ui/bagvoyage-card"
import { BagVoyageButton } from "@/components/ui/bagvoyage-button"
import { BagVoyageInput } from "@/components/ui/bagvoyage-input"
import { BagVoyageBadge } from "@/components/ui/bagvoyage-badge"

export default function BagDetails() {
  const allTags = [
    {
      tag: "1234567890",
      client: "John Smith",
      date: "2025-08-15",
      flight: "Q2 201",
      status: "matched"
    },
    {
      tag: "4532019987",
      client: "—",
      date: "2025-08-15",
      flight: "Q2 201",
      status: "unmatched"
    },
    {
      tag: "9900123456",
      client: "Aisha R.",
      date: "2025-08-15",
      flight: "Q2 201",
      status: "matched"
    }
  ]

  return (
    <div className="min-h-screen bg-bagvoyage-background">
      <div className="max-w-5xl mx-auto p-4">
        {/* Main Container */}
        <BagVoyageCard className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="w-full border-b border-bagvoyage-border bg-gradient-header rounded-t-2xl px-6 py-16">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-1 text-bagvoyage-text-secondary hover:text-bagvoyage-text-primary transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="font-bold">Home</span>
                </Link>
                <h1 className="text-2xl font-bold text-bagvoyage-text-primary">Bag Details</h1>
              </div>
              
              <div className="space-y-4">
                <BagVoyageInput 
                  label="Date"
                  placeholder="2025-08-15" 
                  className="w-48"
                />
                <BagVoyageInput 
                  label="Flight"
                  placeholder="Q2 201" 
                  className="w-48"
                />
                <BagVoyageInput 
                  label="Client (optional)"
                  placeholder="All clients" 
                  className="w-48"
                />
                <div className="flex gap-2">
                  <BagVoyageButton variant="secondary">
                    Export CSV
                  </BagVoyageButton>
                  <BagVoyageButton variant="secondary">
                    View
                  </BagVoyageButton>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <BagVoyageCard>
              <BagVoyageCardHeader>
                <BagVoyageCardTitle className="text-lg">All Tags</BagVoyageCardTitle>
              </BagVoyageCardHeader>
              <BagVoyageCardContent>
                {/* Table Header */}
                <div className="grid grid-cols-6 gap-4 pb-4 text-sm text-bagvoyage-text-secondary">
                  <div className="col-span-1">Tag</div>
                  <div className="col-span-1">Client</div>
                  <div className="col-span-1">Date</div>
                  <div className="col-span-1">Flight</div>
                  <div className="col-span-1">Status</div>
                  <div className="col-span-1"></div>
                </div>

                {/* Table Rows */}
                <div className="space-y-2">
                  {allTags.map((tag, index) => (
                    <div 
                      key={index}
                      className="grid grid-cols-6 gap-4 items-center bg-bagvoyage-item border border-bagvoyage-border rounded-lg p-4"
                    >
                      <div className="col-span-1 text-base text-bagvoyage-text-primary">
                        {tag.tag}
                      </div>
                      <div className="col-span-1 text-base text-bagvoyage-text-primary">
                        {tag.client}
                      </div>
                      <div className="col-span-1 text-base text-bagvoyage-text-primary">
                        {tag.date}
                      </div>
                      <div className="col-span-1 text-base text-bagvoyage-text-primary">
                        {tag.flight}
                      </div>
                      <div className="col-span-1">
                        <BagVoyageBadge 
                          variant={tag.status === "matched" ? "matched" : "unmatched"}
                          className="text-xs"
                        >
                          {tag.status === "matched" ? "Matched" : "Unmatched"}
                        </BagVoyageBadge>
                      </div>
                      <div className="col-span-1"></div>
                    </div>
                  ))}
                </div>
              </BagVoyageCardContent>
            </BagVoyageCard>
          </div>
        </BagVoyageCard>
      </div>
    </div>
  )
}
