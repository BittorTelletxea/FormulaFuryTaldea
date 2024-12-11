import '../../../css/taldeaorria/footer.css';
import cascoImg from '../../../images/casco.png';
import klasifikazioaImg from '../../../images/klasifikazioa.png';
import taldeaSelectedImg from '../../../images/taldeaSelected.png';
import merkatuaImg from '../../../images/merkatua.png';
import aktibitateaImg from '../../../images/aktibitatea.png';

function Footer() {
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
          <div className='ligak'>
            <div className='img'>
              <img src={cascoImg} alt="Casco" />
            </div>
            <p>Ligak</p>
          </div>
          <div className='klasifikazioa'>
            <div className='img'>
              <img src={klasifikazioaImg} alt="Klasifikazioa" />
            </div>
            <a href="kontaktua.html">
              Klasifikazioa
            </a>
          </div>
          <div className='taldeaInput'>
            <img src={taldeaSelectedImg} alt="Taldea Seleccionado" />
            <a href="main.html">Taldea</a>
          </div>
          <div className='merkatua'>
            <div className='img'>
              <img src={merkatuaImg} alt="Merkatua" />
            </div>
            <p>Merkatua</p>
          </div>
          <div className='aktibitatea'>
            <div className='img'>
              <img src={aktibitateaImg} alt="Aktibitatea" />
            </div>
            <p>Aktibitatea</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
