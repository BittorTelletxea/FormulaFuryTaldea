
import Losail from '../../../images/Losail-removebg-preview.png';
import instagram from '../../../images/instagram.png';
import x from '../../../images/x.png';
import tiktok from '../../../images/tiktok.png';

function Lasterketa() {
  return (
    <>
    <div className='container'>
        <div className='hurrengo'>
            <p>HURRENGO LASTERKETA</p>
        </div>
        <div className='blanco'>
        <div className='lasterketa'>
            <p>GP CATAR</p>
            <div className='datuak'>
            <p>DOM, 1 DIC, 17:00</p>
            <p>CIRCUITO INTERNACIONAL DE LOSAIL</p>
            </div>
        </div>
        <div className='circuito'>
            <img src={Losail} alt="" />
        </div>
        </div>
        <div className='kontaktatu1'>
            <p>GUREKIN KONTAKTATU</p>
        </div>
        <div className='blanco2'>
            <div className='kontakt'>
            <p>Zure iritzia garrantzitsua da guretzat!</p>
            <button className='sortuLiga'><a href="../../kontaktua.html">Kontaktatu</a></button>
        </div>
        </div>
        
        
    </div>
    </>
  );
}

export default Lasterketa;
