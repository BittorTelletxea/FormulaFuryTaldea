import '../../../css/taldeaorria/footer.css';
import casco from '../../../images/casco.png.png';
import klasifikazioa  from '../../../images/klasifikazioa.png.png';
import taldeaSelect  from '../../../images/taldeaSelected.png.png';
import merkatua  from '../../../images/merkatua.png.png';
import aktibitatea  from '../../../images/aktibitatea.png';




function Footer() {
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
        <div className='ligak'>
          <div className='img'>
          <img src={casco}  />
          </div>
          <p>Ligak</p>
        </div>
        <div className='klasifikazioa'>
          <div className='img'>
          <img src={klasifikazioa}  />
          </div>
          <a href="kontaktua.html">
          Klasifikazioa
          </a>
        </div>
        <div className='taldeaInput'>
          <img src={taldeaSelect}  />
          <a href="main.html">Taldea</a>
        </div>
        <div className='merkatua'>
          <div className='img'>
          <img src={merkatua}  />
          </div>
          <p>Merkatua</p>
        </div>
        <div className='aktibitatea'>
          <div className='img'>
          <img src={aktibitatea}  />
          </div>
          <p>Aktibitatea</p>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
