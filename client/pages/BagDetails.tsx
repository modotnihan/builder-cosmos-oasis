import * as React from "react"
import { Link } from "react-router-dom"

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
    <div style={{ minHeight: '100vh', backgroundColor: '#11161D', fontFamily: 'Inter, sans-serif' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '1rem' }}>
        {/* Main Container */}
        <div 
          style={{
            width: '100%',
            maxWidth: '64rem',
            margin: '0 auto',
            borderRadius: '1rem',
            border: '1px solid #223141',
            backgroundColor: '#171E27',
            color: '#E7EEF7',
            boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Header */}
          <div 
            style={{
              width: '100%',
              borderBottom: '1px solid #223141',
              background: 'linear-gradient(180deg, #121923 0%, #0E141C 100%)',
              borderRadius: '1rem 1rem 0 0',
              padding: '2rem 1.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/" style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.25rem', 
                  color: '#8EA0B5', 
                  textDecoration: 'none',
                  fontWeight: 'bold'
                }}>
                  ← Home
                </Link>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', margin: 0 }}>
                  Bag Details
                </h1>
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '12rem' }}>
                {/* Date Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Date</label>
                  <input
                    type="text"
                    placeholder="2025-08-15"
                    style={{
                      width: '100%',
                      height: '2.5rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #223141',
                      backgroundColor: '#0E141C',
                      padding: '0 0.75rem',
                      fontSize: '0.875rem',
                      color: '#757575'
                    }}
                  />
                </div>
                
                {/* Flight Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Flight</label>
                  <input
                    type="text"
                    placeholder="Q2 201"
                    style={{
                      width: '100%',
                      height: '2.5rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #223141',
                      backgroundColor: '#0E141C',
                      padding: '0 0.75rem',
                      fontSize: '0.875rem',
                      color: '#757575'
                    }}
                  />
                </div>
                
                {/* Client Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Client (optional)</label>
                  <input
                    type="text"
                    placeholder="All clients"
                    style={{
                      width: '100%',
                      height: '2.5rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #223141',
                      backgroundColor: '#0E141C',
                      padding: '0 0.75rem',
                      fontSize: '0.875rem',
                      color: '#757575'
                    }}
                  />
                </div>
                
                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    style={{
                      flex: 1,
                      padding: '0.875rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #27384B',
                      backgroundColor: '#17212C',
                      color: '#E7EEF7',
                      fontSize: '0.8125rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Export CSV
                  </button>
                  <button
                    style={{
                      flex: 1,
                      padding: '0.875rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #27384B',
                      backgroundColor: '#17212C',
                      color: '#E7EEF7',
                      fontSize: '0.8125rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{
              borderRadius: '1rem',
              border: '1px solid #223141',
              backgroundColor: '#171E27',
              padding: '1.5rem',
              boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.25)'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '1rem' }}>All Tags</h3>
              
              {/* Desktop Table */}
              <div style={{ display: 'block' }}>
                {/* Table Header */}
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(6, 1fr)', 
                  gap: '1rem', 
                  paddingBottom: '1rem', 
                  fontSize: '0.875rem', 
                  color: '#8EA0B5',
                  borderBottom: '1px solid #223141',
                  marginBottom: '1rem'
                }}>
                  <div>Tag</div>
                  <div>Client</div>
                  <div>Date</div>
                  <div>Flight</div>
                  <div>Status</div>
                  <div></div>
                </div>

                {/* Table Rows */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {allTags.map((tag, index) => (
                    <div 
                      key={index}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(6, 1fr)',
                        gap: '1rem',
                        alignItems: 'center',
                        backgroundColor: '#0F1620',
                        border: '1px solid #223141',
                        borderRadius: '0.5rem',
                        padding: '1rem'
                      }}
                    >
                      <div style={{ fontSize: '1rem', color: '#E7EEF7' }}>
                        {tag.tag}
                      </div>
                      <div style={{ fontSize: '1rem', color: '#E7EEF7' }}>
                        {tag.client}
                      </div>
                      <div style={{ fontSize: '1rem', color: '#E7EEF7' }}>
                        {tag.date}
                      </div>
                      <div style={{ fontSize: '1rem', color: '#E7EEF7' }}>
                        {tag.flight}
                      </div>
                      <div>
                        <span style={{
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          border: tag.status === "matched" ? '1px solid #2D6F55' : '1px solid #7A561E',
                          backgroundColor: tag.status === "matched" ? 'rgba(123, 219, 167, 0.15)' : 'rgba(255, 184, 74, 0.12)',
                          color: tag.status === "matched" ? '#9BE6C1' : '#FFD79A',
                          fontSize: '0.75rem',
                          fontWeight: '400'
                        }}>
                          {tag.status === "matched" ? "Matched" : "Unmatched"}
                        </span>
                      </div>
                      <div></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
