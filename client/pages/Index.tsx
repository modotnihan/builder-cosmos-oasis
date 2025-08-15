import * as React from "react"
import { Link } from "react-router-dom"

export default function Index() {
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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Logo */}
                <div 
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    borderRadius: '0.75rem',
                    background: 'linear-gradient(143deg, #4AA8FF 0%, #7BDBA7 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#08121A'
                  }}
                >
                  BV
                </div>
                <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#E7EEF7', margin: 0 }}>
                  BagVoyage
                </h1>
              </div>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'end' }}>
                {/* Date Input */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                  <label style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Date</label>
                  <input
                    type="text"
                    placeholder="2025-08-15"
                    style={{
                      width: '12rem',
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

                {/* Flight Input + Session Button Container */}
                <div style={{ display: 'flex', alignItems: 'end', gap: '0.75rem' }}>
                  {/* Flight Input */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
                    <label style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Flight</label>
                    <input
                      type="text"
                      placeholder="MU123 / Q2 201"
                      style={{
                        width: '9rem',
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

                  {/* Session Button */}
                  <button
                    style={{
                      height: '2.5rem',
                      padding: '0 1rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #27384B',
                      backgroundColor: '#17212C',
                      color: '#E7EEF7',
                      fontSize: '0.8125rem',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    Session
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div style={{ padding: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {/* Quick Actions */}
              <div
                style={{
                  borderRadius: '1rem',
                  border: '1px solid #223141',
                  backgroundColor: '#171E27',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.25)'
                }}
              >
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '1.5rem', lineHeight: '1.4' }}>
                  Quick<br />Actions
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <Link to="/tag-scan" style={{ textDecoration: 'none' }}>
                    <button
                      style={{
                        width: '100%',
                        height: '3.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #2A7BD1',
                        background: 'linear-gradient(180deg, #2A84DF 0%, #206DB9 100%)',
                        color: '#E7EEF7',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Tag
                    </button>
                  </Link>
                  <Link to="/retrieve-scan" style={{ textDecoration: 'none' }}>
                    <button
                      style={{
                        width: '100%',
                        height: '3.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #2A7BD1',
                        background: 'linear-gradient(180deg, #2A84DF 0%, #206DB9 100%)',
                        color: '#E7EEF7',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Retrieve
                    </button>
                  </Link>
                  <Link to="/bag-details" style={{ textDecoration: 'none' }}>
                    <button
                      style={{
                        width: '100%',
                        height: '3.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid #223141',
                        backgroundColor: '#121A22',
                        color: '#E7EEF7',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                      }}
                    >
                      Details
                    </button>
                  </Link>
                  <button
                    style={{
                      width: '100%',
                      height: '3.5rem',
                      borderRadius: '0.75rem',
                      border: '1px solid #223141',
                      backgroundColor: '#121A22',
                      color: '#E7EEF7',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      cursor: 'pointer'
                    }}
                  >
                    Manual Entry
                  </button>
                  
                  {/* HID Toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem' }}>
                    <span style={{ fontSize: '1rem', color: '#8EA0B5' }}>HID</span>
                    <div style={{ position: 'relative' }}>
                      <div style={{ 
                        width: '3.5rem', 
                        height: '1.75rem', 
                        backgroundColor: '#233142', 
                        border: '1px solid #2E4258', 
                        borderRadius: '9999px',
                        position: 'relative'
                      }}>
                        <div style={{ 
                          width: '1.25rem', 
                          height: '1.25rem', 
                          backgroundColor: 'white', 
                          borderRadius: '50%', 
                          position: 'absolute',
                          top: '0.125rem',
                          left: '0.25rem',
                          transition: 'transform 0.2s'
                        }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Session */}
              <div
                style={{
                  borderRadius: '1rem',
                  border: '1px solid #223141',
                  backgroundColor: '#171E27',
                  padding: '1.5rem',
                  boxShadow: '0 10px 30px 0 rgba(0, 0, 0, 0.25)'
                }}
              >
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '1.5rem' }}>
                  Current Session
                </h2>
                
                {/* Stats Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                  <div style={{ 
                    backgroundColor: '#0F1620', 
                    border: '1px solid #223141', 
                    borderRadius: '0.75rem', 
                    padding: '1rem' 
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '0.5rem' }}>68</div>
                    <div style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Tags Saved</div>
                  </div>
                  <div style={{ 
                    backgroundColor: '#0F1620', 
                    border: '1px solid #223141', 
                    borderRadius: '0.75rem', 
                    padding: '1rem' 
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '0.5rem' }}>54</div>
                    <div style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Matched</div>
                  </div>
                  <div style={{ 
                    backgroundColor: '#0F1620', 
                    border: '1px solid #223141', 
                    borderRadius: '0.75rem', 
                    padding: '1rem' 
                  }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#E7EEF7', marginBottom: '0.5rem' }}>14</div>
                    <div style={{ fontSize: '0.75rem', color: '#8EA0B5' }}>Unmatched</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    style={{
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
        </div>
      </div>
    </div>
  )
}
