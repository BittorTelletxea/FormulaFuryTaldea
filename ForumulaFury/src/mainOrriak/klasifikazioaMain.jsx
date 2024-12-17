import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from '../components/klasifikazioOrria/Header.jsx';
import Total from "../components/klasifikazioOrria/Total.jsx";
import Jokalaria from "../components/klasifikazioOrria/Jokalaria.jsx";


import '../css/klasifikazioOrria/header.css';
import '../css/klasifikazioOrria/jokalaria.css';
import '../css/orriNagusia/nagusia.css';

import Footer from '../components/klasifikazioOrria/Footer.jsx';





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Total />
    <Jokalaria/>
    <Footer />
  </StrictMode>,
)
