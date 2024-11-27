import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Lasterketa from './components/Lasterketa.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Lasterketa/>
    <Footer />
  </StrictMode>,
)
