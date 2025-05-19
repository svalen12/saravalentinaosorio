import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

import {Rutas} from './components/routes/Rutas/Rutas.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>

  <BrowserRouter>
  <Rutas></Rutas>
  </BrowserRouter>
  
  </StrictMode>,
)
