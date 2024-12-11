import 'bootstrap/dist/css/bootstrap.min.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Footer from '../../Components/Footer.jsx';
import Header from '../../Components/Header.jsx';
import Lasterketa from '../../Components/orrinagusia/Lasterketa.jsx';
import Nagusia from '../../Components/orrinagusia/Nagusia.jsx';
import '../../../css/orriNagusia/lasterketa.css';
import '../../../css/kontaktuaOrria/kontaktua.css';

function nagusiaMain(){
return(
  <>
    <Header />
      <Nagusia />
      <Lasterketa/>
    <Footer />
  </>
);
}
export default nagusiaMain;
