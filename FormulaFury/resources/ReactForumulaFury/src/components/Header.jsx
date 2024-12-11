import { useState } from 'react';
import '../css/header.css';



function Hasiera() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      
      <div className={`overlay ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      <div className="container text-center">
        <div className="header">
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
          <div className="logo">
            <a href="../../main.html">
            <img src="../../public/images/logomainblanco.png" alt="Logo" />
            </a>
          </div>
        </div>

        {/* Barra lateral */}
        <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <button className="close-btn" onClick={toggleMenu}>
            ×
          </button>
          
          <ul>
          <div className='perfil'>
            <img src="../../public/images/perfil.png" alt="" />
            <p>macacopeleon</p>
            </div>
            <hr />
            <li>
              <img src="../../public/images/casco2.png" alt="" />
              <p>Nire ligak</p>
              </li>
            <li>
              <img src="../../public/images/ranking.png" alt="" />
              <p>Ranking</p>
              </li>
            <li>
              <img src="../../public/images/lasterketa.png" alt="" />
              <p>Lasterketak</p>
              </li>
            <li>
              <img src="../../public/images/megafono.png" alt="" />
              <p>Albisteak</p>
              </li>
            <li>
              <img src="../../public/images/maletin.png" alt="" />
              <p>Merkatua</p>
              </li>
            <li>
              <img src="../../public/images/bajak.png" alt="" />
              <p>Bajak</p>
              </li>
            <li>
              <img src="../../public/images/perfila.png" alt="" />
              <p>Profila</p>
              </li>
            <li>
              <img src="../../public/images/laguntza.png" alt="" />
              <p>Laguntza</p>
              </li>
            <li>
              <img src="../../public/images/terminos.png" alt="" />
              <p>Termino eta kondizioak</p>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hasiera;
