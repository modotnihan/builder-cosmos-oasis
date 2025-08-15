import * as React from "react"
import { Link } from "react-router-dom"

export default function RetrieveScan() {
  const matchedBags = [
    { id: "1234567890", name: "John Smith" },
    { id: "9900123456", name: "Aisha R." },
    { id: "8812334455", name: "Lee W." },
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
              padding: '1.75rem 1.5rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Link to="/" style={{ 
                  display: 'flex', 
                  flexDirection: 'column',
                  alignItems: 'start',
                  gap: '0.25rem', 
                  color: '#8EA0B5', 
                  textDecoration: 'none',
                  fontWeight: 'bold',
                  fontSize: '0.875rem'
                }}>
                  ←<br/>Home
                </Link>
                <div>
                  <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', margin: 0, lineHeight: '1.4' }}>
                    Retrieve –<br/>Scan
                  </h1>
                </div>
              </div>
              
              <div style={{ fontSize: '1rem', color: '#8EA0B5', maxWidth: '20rem', textAlign: 'right' }}>
                Scans are matched by <span style={{ fontWeight: 'bold' }}>Date + Flight</span> across<br />
                all clients.
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Camera Section */}
              <div style={{ gridColumn: 'span 2' }}>
                <div style={{
                  backgroundColor: '#0D131A',
                  border: '1px dashed #2A3A4D',
                  borderRadius: '1rem',
                  padding: '1rem',
                  height: '25.625rem',
                  position: 'relative'
                }}>
                  {/* Viewfinder with orange gradient */}
                  <div style={{
                    background: 'radial-gradient(70.71% 70.71% at 50% 50%, rgba(255, 184, 74, 0.15) 0%, rgba(255, 184, 74, 0.00) 60%), #0B1117',
                    borderRadius: '1rem',
                    border: '1px solid #2A3A4D',
                    padding: '1rem',
                    height: '20rem',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <div style={{
                      width: '14rem',
                      height: '10rem',
                      borderRadius: '0.625rem',
                      border: '2px solid rgba(255, 255, 255, 0.25)',
                      background: 'rgba(255, 255, 255, 0.00)',
                      boxShadow: '0 0 0 4px rgba(0, 0, 0, 0.30) inset'
                    }}></div>
                  </div>
                  
                  {/* Bottom Controls */}
                  <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', display: 'flex', gap: '1rem' }}>
                    <button style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #27384B',
                      backgroundColor: '#17212C',
                      color: '#E7EEF7',
                      fontSize: '0.8125rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      Torch
                    </button>
                    <button style={{
                      padding: '0.5rem 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #27384B',
                      backgroundColor: '#17212C',
                      color: '#E7EEF7',
                      fontSize: '0.8125rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}>
                      Exit
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Match Result */}
                <div style={{
                  borderRadius: '1rem',
                  border: '1px solid #223141',
                  backgroundColor: '#171E27',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.25)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#E7EEF7', margin: 0 }}>Match Result</h3>
                    <span style={{
                      padding: '0.375rem 0.75rem',
                      borderRadius: '9999px',
                      border: '1px solid #7A561E',
                      backgroundColor: 'rgba(255, 184, 74, 0.12)',
                      color: '#FFD79A',
                      fontSize: '0.75rem',
                      fontWeight: 'bold'
                    }}>
                      UNMATCHED
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: '#8EA0B5' }}>Scanned</div>
                      <div style={{ fontSize: '1rem', color: '#E7EEF7' }}>4532019987</div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div style={{ fontSize: '0.875rem', color: '#8EA0B5' }}>Closest</div>
                      <div style={{ fontSize: '0.75rem', color: '#E7EEF7' }}>—</div>
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', color: '#8EA0B5' }}>Flight</div>
                      <div style={{ fontSize: '1rem', color: '#E7EEF7' }}>Q2 201</div>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem', paddingTop: '0.5rem' }}>
                      <button style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #2A7BD1',
                        background: 'linear-gradient(180deg, #2A84DF 0%, #206DB9 100%)',
                        color: '#E7EEF7',
                        fontSize: '0.8125rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}>
                        Continue
                      </button>
                    </div>
                    <div style={{ paddingTop: '0.5rem' }}>
                      <button style={{
                        padding: '0.5rem 1rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #223141',
                        backgroundColor: '#121A22',
                        color: '#E7EEF7',
                        fontSize: '0.8125rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}>
                        Open Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Matched Bags */}
                <div style={{
                  borderRadius: '1rem',
                  border: '1px solid #223141',
                  backgroundColor: '#171E27',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.25)'
                }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '1rem' }}>Matched Bags</h3>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                    {matchedBags.map((bag, index) => (
                      <div 
                        key={index}
                        style={{
                          backgroundColor: '#0F1620',
                          border: '1px solid #223141',
                          borderRadius: '9999px',
                          padding: '0.75rem'
                        }}
                      >
                        <div style={{ fontSize: '1rem', color: '#E7EEF7', lineHeight: '1.4' }}>
                          <span style={{ fontWeight: 'normal' }}>{bag.id} —</span>
                          <br />
                          <span style={{ fontWeight: 'bold' }}>{bag.name}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
