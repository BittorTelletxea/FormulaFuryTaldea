import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Kontaktua from '../components/kontaktuOrria/KontaktuaForm.jsx';
import '../css/kontaktuaOrria/kontaktua.css';
import '../css/footer.css';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Kontaktua/>
  </StrictMode>,
)
