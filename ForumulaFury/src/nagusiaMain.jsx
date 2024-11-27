import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Lasterketa from './components/Lasterketa.jsx';
import Nagusia from './components/Nagusia.jsx';
import './css/orriNagusia/nagusia.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <div className='nagusia-div'>
      <Nagusia />
      <Lasterketa/>
    </div>
    <Footer />
  </StrictMode>,
)
