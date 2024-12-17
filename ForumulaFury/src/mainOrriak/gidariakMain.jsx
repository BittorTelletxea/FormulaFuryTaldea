import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gidaria from '../components/gidariakOrria/Contenedor.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gidaria />
  </StrictMode>,
)
