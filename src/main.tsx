import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import  { PresupuestoChildren } from './ContextAPI/PresupuestoContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PresupuestoChildren>
      <App />
    </PresupuestoChildren>
  </StrictMode>
)
