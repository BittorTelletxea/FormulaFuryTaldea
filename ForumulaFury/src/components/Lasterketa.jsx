import '../css/orriNagusia/lasterketa.css';

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
            <img src="../../public/images/Losail-removebg-preview.png" alt="" />
        </div>
        </div>
        <div className='kontaktatu'>
            <p>GUREKIN KONTAKTATU</p>
        </div>
        <div className='blanco2'>
            <div className='kontakt'>
            <p>Zure iritzia garrantzitsua da guretzat!</p>
            <button className='registrar'>KONTAKTATU</button><br />
        </div>
        </div>
        <div className='sozialak'>
            <p>SARE SOZIALAK</p>
        </div>
        <div className='blanco3'>
            <div className='imagenes'>
            <div className='instagram'>
                <img src="../../public/images/instagram.png" alt="" />
            </div>
            <div className='x'>
                <img src="../../public/images/x.png" alt="" />
            </div>
            
            <div className='tiktok'>
                <img src="../../public/images/tiktok.png" alt="" />
            </div>
            </div>
        </div>
    </div>
    </>
  );
}

export default Lasterketa;
