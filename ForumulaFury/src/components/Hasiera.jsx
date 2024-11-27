import '../style.css';
import fondo from '../assets/video/video.mp4'

function Hasiera() {
  return (
    <>
      <div className='container text-center '>
      <video className="video-background" autoPlay muted loop>
        <source src={fondo} type="video/mp4" />
      </video>
        <div className='logo'>
          <img src="/images/logoblanco.png" alt="Logo F1 Fury" />
        </div>
        <div className='login mt-4'>
          <button className='registrar'>SORTU KONTUA</button><br />
          <button className='login'><p>KONTUA BADUT</p></button>
        </div>
      </div>
    </>
  );
}

export default Hasiera;
