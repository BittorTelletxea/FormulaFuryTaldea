import '../../css/style.css';
import fondo from '../../assets/video/video.mp4';
import logo from '../../images/logoblanco.png';

function Hasiera() {
  return (
    <>
      <div className='container text-center'>
        <video className="video-background" autoPlay muted loop>
          <source src={fondo} type="video/mp4" />
        </video>
        <div className='logos'>
          <img src={logo} alt="Logo F1 Fury" />
        </div>
        <div className='login mt-4'>
          <button className='registrar'>SORTU KONTUA</button><br />
            <button className='login'>
            <a href="/nagusia">KONTUA BADUT</a>
            </button>
        </div>
      </div>
    </>
  );
}

export default Hasiera;
