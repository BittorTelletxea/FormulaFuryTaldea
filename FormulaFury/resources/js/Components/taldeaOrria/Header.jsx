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
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [locale, setLocale] = useState(document.documentElement.lang);
  const { translations } = usePage().props;
  const [dynamicTranslations, setDynamicTranslations] = useState(translations);
 
  console.log(translations);
 
  const toggleMenu = () => {
     setMenuOpen(!menuOpen);
  };
 
   const logOut = async (event) => {
     event.preventDefault();
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
   };
 
   const handleLanguageChange = async (event) => {
     const selectedLanguage = event.target.value;
     console.log('sartu da hizkuntza aldatu');
     try {
       const response = await fetch(`/set-locale/${selectedLanguage}`, {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json',
         },
       });
   
       if (response.ok) {
         const data = await response.json();
         setLocale(selectedLanguage);     
         setDynamicTranslations(data);
         window.location.reload();    
       } else {
         console.error('Error al cambiar idioma. Código de respuesta:', response.status);
       }
     } catch (error) {
       console.error('Error cambiando el idioma:', error);
     }
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
          <div className="sidebar-header">
            <button className="close-btn" onClick={toggleMenu}>
              ×
            </button>
            <select value={locale} onChange={handleLanguageChange} className="language-select">
              <option value="eu">Euskera</option>
              <option value="es">Español</option>
            </select>
          </div>

          <ul>
            <div className="perfil">
              <form onSubmit={logOut}>
                <img src={perfilImg} alt="Perfil" />
                <p>macacopeleon</p>
                <button type="submit">{translations.header.sesioaitxi}</button>
              </form>
            </div>
            <hr />
            <li>
              <img src={casco2Img} alt="Nire ligak" />
              <p>{translations.header.nireligak}</p>
            </li>
            <li>
              <img src={rankingImg} alt="Ranking" />
              <p>{translations.header.ranking}</p>
            </li>
            <li>
              <img src={lasterketaImg} alt="Lasterketak" />
              <p>{translations.header.lasterketak}</p>
            </li>
            <li>
              <img src={megafonoImg} alt="Albisteak" />
              <p>{translations.header.albisteak}</p>
            </li>
            <li>
              <img src={maletinImg} alt="Merkatua" />
              <p>{translations.header.merkatua}</p>
            </li>
            <li>
              <img src={bajakImg} alt="Bajak" />
              <p>{translations.header.bajak}</p>
            </li>
            <li>
              <img src={perfilaImg} alt="Profila" />
              <p>{translations.header.profila}</p>
            </li>
            <li>
              <img src={laguntzaImg} alt="Laguntza" />
              <p>{translations.header.laguntza}</p>
            </li>
            <li>
              <img src={terminosImg} alt="Termino eta Kondizioak" />
              <p>{translations.header.terminoak}</p>
            </li>
          </ul>
        </div>
        </div>
        <div className='sekzioak'>
          <div className='taldea'>
            <a href='taldea' style={{ textDecoration: 'none', color: 'white' }}><p>Taldea</p></a>
          </div>
          <div className='gidariak'>
            <a href='gidariak' style={{ textDecoration: 'none' }}><p>Gidariak</p></a>
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
