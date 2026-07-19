import React, { useState } from 'react'
import Envelope from './components/Envelope'
import InvitationContent from './components/InvitationContent'

function App() {
  const [showMainContent, setShowMainContent] = useState(false)

  const handleEnvelopeOpen = () => {
    // Wait a little bit before showing main content
    setShowMainContent(true)
  }

  return (
    <>
      {!showMainContent && (
        <Envelope onOpen={handleEnvelopeOpen} />
      )}
      
      {showMainContent && (
        <InvitationContent />
      )}
    </>
  )
}

export default App
