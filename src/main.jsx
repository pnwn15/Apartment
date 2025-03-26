import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import NavbarComponents from './Pages/Navbar/Navbar.jsx'
import Footer from './Pages/Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarComponents>
      <App />
    
    </NavbarComponents>

  </StrictMode>,
)
