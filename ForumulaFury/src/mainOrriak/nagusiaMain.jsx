import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Lasterketa from '../components/orrinagusia/Lasterketa.jsx';
import Nagusia from '../components/orrinagusia/Nagusia.jsx';
import '../css/orriNagusia/nagusia.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
      <Nagusia />
      <Lasterketa/>
    <Footer />
  </StrictMode>,
)
