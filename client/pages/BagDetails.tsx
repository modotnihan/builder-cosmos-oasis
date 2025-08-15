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
          <div className="w-full border-b border-bagvoyage-border bg-gradient-header rounded-t-2xl px-4 md:px-6 py-8 md:py-16">
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-1 text-bagvoyage-text-secondary hover:text-bagvoyage-text-primary transition-colors">
                  <ChevronLeft className="w-4 h-4" />
                  <span className="font-bold">Home</span>
                </Link>
                <h1 className="text-xl md:text-2xl font-bold text-bagvoyage-text-primary">Bag Details</h1>
              </div>

              <div className="space-y-4">
                <BagVoyageInput
                  label="Date"
                  placeholder="2025-08-15"
                  className="w-full md:w-48"
                />
                <BagVoyageInput
                  label="Flight"
                  placeholder="Q2 201"
                  className="w-full md:w-48"
                />
                <BagVoyageInput
                  label="Client (optional)"
                  placeholder="All clients"
                  className="w-full md:w-48"
                />
                <div className="flex flex-col sm:flex-row gap-2">
                  <BagVoyageButton variant="secondary" className="w-full sm:w-auto">
                    Export CSV
                  </BagVoyageButton>
                  <BagVoyageButton variant="secondary" className="w-full sm:w-auto">
                    View
                  </BagVoyageButton>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            <BagVoyageCard>
              <BagVoyageCardHeader>
                <BagVoyageCardTitle className="text-lg">All Tags</BagVoyageCardTitle>
              </BagVoyageCardHeader>
              <BagVoyageCardContent>
                {/* Desktop Table */}
                <div className="hidden md:block">
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
                </div>

                {/* Mobile Cards */}
                <div className="md:hidden space-y-4">
                  {allTags.map((tag, index) => (
                    <div
                      key={index}
                      className="bg-bagvoyage-item border border-bagvoyage-border rounded-lg p-4 space-y-3"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-base font-bold text-bagvoyage-text-primary">{tag.tag}</span>
                        <BagVoyageBadge
                          variant={tag.status === "matched" ? "matched" : "unmatched"}
                          className="text-xs"
                        >
                          {tag.status === "matched" ? "Matched" : "Unmatched"}
                        </BagVoyageBadge>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <span className="text-bagvoyage-text-secondary">Client:</span>
                          <div className="text-bagvoyage-text-primary">{tag.client}</div>
                        </div>
                        <div>
                          <span className="text-bagvoyage-text-secondary">Flight:</span>
                          <div className="text-bagvoyage-text-primary">{tag.flight}</div>
                        </div>
                        <div className="col-span-2">
                          <span className="text-bagvoyage-text-secondary">Date:</span>
                          <div className="text-bagvoyage-text-primary">{tag.date}</div>
                        </div>
                      </div>
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
