import '../../../css/klasifikazioOrria/footer.css';

import casco from '../../../images/casco.png.png';
import klasifikazioaSelected from '../../../images/klasifikazioaSelected.png.png';
import taldea from '../../../images/taldea.png.png';
import merkatua from '../../../images/merkatua.png.png';
import aktibitatea from '../../../images/aktibitatea.png';

function Footer() {
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
        <div className='ligak'>
          <div className='img'>
          <img src={casco} alt="" />
          </div>
          <a href='nagusia'>Ligak</a>
        </div>
        <div className='klasifikazioa'>
          <div className='img'>
          <img src={klasifikazioaSelected} alt="" />
          </div>
          <p>Klasifikazioa</p>
        </div>
        <div className='taldea'>
          <img src={taldea} alt="" />
          <p>Taldea</p>
        </div>
        <div className='merkatua'>
          <div className='img'>
          <img src={merkatua} alt="" />
          </div>
          <p>Merkatua</p>
        </div>
        <div className='aktibitatea'>
          <div className='img'>
          <img src={aktibitatea} alt="" />
          </div>
          <p>Aktibitatea</p>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
