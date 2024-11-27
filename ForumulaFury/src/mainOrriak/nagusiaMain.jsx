import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
<<<<<<< HEAD:ForumulaFury/src/nagusiaMain.jsx
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import Lasterketa from './components/Lasterketa.jsx';
import Nagusia from './components/Nagusia.jsx';
=======
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import Lasterketa from '../components/orrinagusia/Lasterketa.jsx';
import Nagusia from '../components/orrinagusia/Nagusia.jsx';
import '../css/orriNagusia/nagusia.css';
>>>>>>> cd0532ca9927426cc74b9e80473b1eb2afa0ce30:ForumulaFury/src/mainOrriak/nagusiaMain.jsx


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
      <Nagusia />
      <Lasterketa/>
    <Footer />
  </StrictMode>,
)
