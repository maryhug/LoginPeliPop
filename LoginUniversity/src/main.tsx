import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginInicial from './Components/login'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LoginInicial></LoginInicial>
  </StrictMode>,
)
