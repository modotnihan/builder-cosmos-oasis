import * as React from "react"
import { Link } from "react-router-dom"
import { BagVoyageCard, BagVoyageCardContent, BagVoyageCardHeader, BagVoyageCardTitle } from "@/components/ui/bagvoyage-card"
import { BagVoyageButton } from "@/components/ui/bagvoyage-button"
import { BagVoyageInput } from "@/components/ui/bagvoyage-input"
import { Logo } from "@/components/ui/logo"

export default function Index() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#11161D' }}>
      <div className="max-w-5xl mx-auto p-4">
        {/* Main Container */}
        <BagVoyageCard className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="w-full border-b bg-gradient-header rounded-t-2xl px-4 md:px-6 py-7" style={{ borderColor: '#223141' }}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <Logo />
                <h1 className="text-xl font-bold text-bagvoyage-text-primary">BagVoyage</h1>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <BagVoyageInput
                    label="Date"
                    placeholder="2025-08-15"
                    className="w-full sm:w-48"
                  />
                  <BagVoyageInput
                    label="Flight"
                    placeholder="MU123 / Q2 201"
                    className="w-full sm:w-36"
                  />
                </div>
                <div className="sm:mt-6">
                  <BagVoyageButton variant="secondary" size="sm">
                    Session
                  </BagVoyageButton>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <div className="lg:col-span-1">
                <BagVoyageCard>
                  <BagVoyageCardHeader>
                    <BagVoyageCardTitle className="text-2xl">
                      Quick<br />Actions
                    </BagVoyageCardTitle>
                  </BagVoyageCardHeader>
                  <BagVoyageCardContent className="space-y-4">
                    <Link to="/tag-scan">
                      <BagVoyageButton className="w-full h-14 text-base">
                        Tag
                      </BagVoyageButton>
                    </Link>
                    <Link to="/retrieve-scan">
                      <BagVoyageButton className="w-full h-14 text-base">
                        Retrieve
                      </BagVoyageButton>
                    </Link>
                    <Link to="/bag-details">
                      <BagVoyageButton variant="secondary" className="w-full h-14 text-base">
                        Details
                      </BagVoyageButton>
                    </Link>
                    <BagVoyageButton variant="secondary" className="w-full h-14 text-base">
                      Manual Entry
                    </BagVoyageButton>
                    
                    {/* HID Toggle */}
                    <div className="flex items-center justify-between pt-4">
                      <span className="text-base text-bagvoyage-text-secondary">HID</span>
                      <div className="relative">
                        <div className="w-14 h-7 bg-bagvoyage-button-border border border-bagvoyage-button-border rounded-full">
                          <div className="w-5 h-5 bg-white rounded-full mt-1 ml-1 transition-transform"></div>
                        </div>
                      </div>
                    </div>
                  </BagVoyageCardContent>
                </BagVoyageCard>
              </div>

              {/* Current Session */}
              <div className="lg:col-span-2">
                <BagVoyageCard>
                  <BagVoyageCardHeader>
                    <BagVoyageCardTitle className="text-2xl">
                      Current Session
                    </BagVoyageCardTitle>
                  </BagVoyageCardHeader>
                  <BagVoyageCardContent>
                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="bg-bagvoyage-item border border-bagvoyage-border rounded-xl p-4">
                        <div className="text-2xl font-bold text-bagvoyage-text-primary mb-2">68</div>
                        <div className="text-xs text-bagvoyage-text-secondary">Tags Saved</div>
                      </div>
                      <div className="bg-bagvoyage-item border border-bagvoyage-border rounded-xl p-4">
                        <div className="text-2xl font-bold text-bagvoyage-text-primary mb-2">54</div>
                        <div className="text-xs text-bagvoyage-text-secondary">Matched</div>
                      </div>
                      <div className="bg-bagvoyage-item border border-bagvoyage-border rounded-xl p-4">
                        <div className="text-2xl font-bold text-bagvoyage-text-primary mb-2">14</div>
                        <div className="text-xs text-bagvoyage-text-secondary">Unmatched</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      <BagVoyageButton variant="secondary">
                        Export CSV
                      </BagVoyageButton>
                      <BagVoyageButton variant="secondary">
                        View
                      </BagVoyageButton>
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
