import { useState } from 'react';
import '../../../css/gidariaOrria/header.css';
import '../../../css/header.css';

import perfil from '../../../images/perfil.png';
import casco2 from '../../../images/casco2.png';
import ranking from '../../../images/ranking.png';
import lasterketa from '../../../images/lasterketa.png';
import megafono from '../../../images/megafono.png';
import maletin from '../../../images/maletin.png';
import bajak from '../../../images/bajak.png';
import perfila from '../../../images/perfila.png';
import laguntza from '../../../images/laguntza.png';
import terminos from '../../../images/terminos.png';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <>
    <div className='cont'>
    <div className='dena'>

      <div className='header'>
        <p>FURY</p>
        <p className='f1'>F1 team </p>
      </div>
      
      <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
      <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleMenu}>
            ×
          </button>
          
          <ul>
          <div className='perfil'>
            <img src={perfil} alt="" />
            <p>macacopeleon</p>
            </div>
            <hr />
            <li>
              <img src={casco2} alt="" />
              <p>Nire ligak</p>
              </li>
            <li>
              <img src={ranking} alt="" />
              <p>Ranking</p>
              </li>
            <li>
              <img src={lasterketa} alt="" />
              <p>Lasterketak</p>
              </li>
            <li>
              <img src={megafono} alt="" />
              <p>Albisteak</p>
              </li>
            <li>
              <img src={maletin} alt="" />
              <p>Merkatua</p>
              </li>
            <li>
              <img src={bajak} alt="" />
              <p>Bajak</p>
              </li>
            <li>
              <img src={perfila} alt="" />
              <p>Profila</p>
              </li>
            <li>
              <img src={laguntza} alt="" />
              <p>Laguntza</p>
              </li>
            <li>
              <img src={terminos} alt="" />
              <p>Termino eta kondizioak</p>
              </li>
          </ul>
          
        </div>
        </div>
        <div className='sekzioak'>
        <div className='taldea'>
            <p>Taldea</p>
        </div>
        <div className='gidariak'>
            <p>Gidariak</p>
        </div>
        <div className='puntuak'>
            <p>Puntuak</p>
        </div>
        </div>
        
      </div>
      
    </>
  );
}

export default Header;
