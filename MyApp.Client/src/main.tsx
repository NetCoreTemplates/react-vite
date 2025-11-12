import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClientContext, setLinkComponent } from "@servicestack/react"
import { Link } from 'react-router-dom'
import { init, client } from './gateway'

// Configure the library to use React Router's Link component
setLinkComponent(Link)
init()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <ClientContext.Provider value={client}>
        <App />
      </ClientContext.Provider>
  </StrictMode>,
)
