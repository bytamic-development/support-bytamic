import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import { Waves } from './components/ui/wave-background'
import { MinimalFooter } from './components/ui/minimal-footer'
import { ProcessSection } from './components/ui/process-section'
import { ContactForm } from './components/ui/contact-form'
import './styles.css'

// Mount the Waves background component
const root = document.getElementById('waves-background-root')
if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <Waves 
        strokeColor="rgba(169, 237, 2, 0.08)" 
        backgroundColor="transparent"
        pointerSize={0}
      />
    </React.StrictMode>
  )
}

// Mount the Process Section component
const processRoot = document.getElementById('process-root')
if (processRoot) {
  ReactDOM.createRoot(processRoot).render(
    <React.StrictMode>
      <ProcessSection />
    </React.StrictMode>
  )
}

// Mount the Footer component
const footerRoot = document.getElementById('footer-root')
if (footerRoot) {
  ReactDOM.createRoot(footerRoot).render(
    <React.StrictMode>
      <MinimalFooter />
    </React.StrictMode>
  )
}

// Contact Form Manager Component
function ContactFormManager() {
  const [isOpen, setIsOpen] = useState(false)

  React.useEffect(() => {
    // Listen for custom event to open contact form
    const handleOpenContact = () => setIsOpen(true)
    window.addEventListener('openContactForm', handleOpenContact)
    
    return () => {
      window.removeEventListener('openContactForm', handleOpenContact)
    }
  }, [])

  return <ContactForm isOpen={isOpen} onClose={() => setIsOpen(false)} />
}

// Mount the Contact Form Manager
const contactFormRoot = document.getElementById('contact-form-root')
if (contactFormRoot) {
  ReactDOM.createRoot(contactFormRoot).render(
    <React.StrictMode>
      <ContactFormManager />
    </React.StrictMode>
  )
}
