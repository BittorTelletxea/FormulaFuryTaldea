import '../../css/header.css';
import perfilImg from '../../images/perfil.png';
import casco2Img from '../../images/casco2.png';
import rankingImg from '../../images/ranking.png';
import lasterketaImg from '../../images/lasterketa.png';
import megafonoImg from '../../images/megafono.png';
import maletinImg from '../../images/maletin.png';
import bajakImg from '../../images/bajak.png';
import perfilaImg from '../../images/perfila.png';
import laguntzaImg from '../../images/laguntza.png';
import terminosImg from '../../images/terminos.png';
import logomainblancoImg from '../../images/logomainblanco.png';
import { useState } from 'react';

function Hasiera() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [locale, setLocale] = useState(document.documentElement.lang); // Idioma actual

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const logOut = async (event) => {
    event.preventDefault();
    console.log('sartu da sesioa itxi');
    try {
      
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content'), 
        },
      });

      if (response.ok) {
        
        window.location.href = '/'; 
      } else {
        throw new Error('Error al cerrar sesión');
      }
    } catch (error) {
      console.error('Error al hacer logout:', error);
    }

  }

  const handleLanguageChange = async (event) => {
    const selectedLanguage = event.target.value;
    try {
      const response = await fetch(`/set-locale/${selectedLanguage}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        setLocale(selectedLanguage); 
        window.location.reload(); 
      } else {
        throw new Error('Error al cambiar idioma');
      }
    } catch (error) {
      console.error('Error cambiando el idioma:', error);
    }
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
            <a href="/nagusia">
              <img src={logomainblancoImg} alt="Logo" />
            </a>
          </div>
        </div>

        {/* Barra lateral */}
        <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <div className="sidebar-header">
            <button className="close-btn" onClick={toggleMenu}>
              ×
            </button>
           <select value={locale} onChange={handleLanguageChange}>
              <option value="eu">Euskera</option>
              <option value="es">Español</option>
            </select> 
          </div>

          <ul>
            <div className="perfil">
              <form onSubmit={logOut}>
                <img src={perfilImg} alt="Perfil" />
                <p>macacopeleon</p>
                <button type="submit">Sesioa itxi</button>
              </form>
            </div>
            <hr />
            <li>
              <img src={casco2Img} alt="Nire ligak" />
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
    </>
  );
}

export default Hasiera;