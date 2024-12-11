import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/taldeaOrria/Header.jsx';
import Taldea from '../components/taldeaOrria/Taldea.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Taldea />
  </StrictMode>,
)
