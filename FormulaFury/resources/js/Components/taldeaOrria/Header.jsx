import { useState } from 'react';
import '../../../css/taldeaOrria/header.css';
import '../../../css/header.css';
import tick from '../../../images/tick.png';
import fernando from '../../../images/fernando.png';
import perfilImg from '../../../images/perfil.png';
import casco2Img from '../../../images/casco2.png';
import rankingImg from '../../../images/ranking.png';
import lasterketaImg from '../../../images/lasterketa.png';
import megafonoImg from '../../../images/megafono.png';
import maletinImg from '../../../images/maletin.png';
import bajakImg from '../../../images/bajak.png';
import perfilaImg from '../../../images/perfila.png';
import laguntzaImg from '../../../images/laguntza.png';
import terminosImg from '../../../images/terminos.png';

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
                <img src={perfilImg} alt="Perfil" />
                <p>macacopeleon</p>
              </div>
              <hr />
              <li>
                <img src={casco2Img} alt="Nire Ligak" />
                <p>Nire ligak</p>
              </li>
              <li>
                <img src={rankingImg} alt="Ranking" />
                <p>Ranking</p>
              </li>
              <li>
                <img src={lasterketaImg} alt="Lasterketak" />
                <p>Lasterketak</p>
              </li>
              <li>
                <img src={megafonoImg} alt="Albisteak" />
                <p>Albisteak</p>
              </li>
              <li>
                <img src={maletinImg} alt="Merkatua" />
                <p>Merkatua</p>
              </li>
              <li>
                <img src={bajakImg} alt="Bajak" />
                <p>Bajak</p>
              </li>
              <li>
                <img src={perfilaImg} alt="Profila" />
                <p>Profila</p>
              </li>
              <li>
                <img src={laguntzaImg} alt="Laguntza" />
                <p>Laguntza</p>
              </li>
              <li>
                <img src={terminosImg} alt="Termino eta Kondizioak" />
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
