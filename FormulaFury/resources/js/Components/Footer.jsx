import '../../css/footer.css';
import ligakImg from '../../images/ligakSelected.png.png';
import klasifikazioaImg from '../../images/klasifikazioa.png.png';
import taldeaImg from '../../images/taldea.png.png';
import merkatuaImg from '../../images/merkatua.png.png';
import aktibitateaImg from '../../images/aktibitatea.png';

function Footer() {
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
          <div className='ligak'>
            <div className='img'>
              <img src={ligakImg} alt="Ligak" />
            </div>
            <p>Ligak</p>
          </div>
          <div className='klasifikazioa'>
            <div className='img'>
              <img src={klasifikazioaImg} alt="Klasifikazioa" />
            </div>
            <a href="klasifikazioa">
              Klasifikazioa
            </a>
          </div>
          <div className='taldea'>
            <img src={taldeaImg} alt="Taldea" />
            <p>Taldea</p>
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
