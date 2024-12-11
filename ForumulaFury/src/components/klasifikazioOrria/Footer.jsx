import '../../css/klasifikazioOrria/footer.css';

function Footer() {
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
        <div className='ligak'>
          <div className='img'>
          <img src="../../public/images/casco.png.png"  />
          </div>
          <a href='main.html'>Ligak</a>
        </div>
        <div className='klasifikazioa'>
          <div className='img'>
          <img src="../../public/images/klasifikazioaSelected.png.png"  />
          </div>
          <p>Klasifikazioa</p>
        </div>
        <div className='taldea'>
          <img src="../../public/images/taldea.png.png"  />
          <p>Taldea</p>
        </div>
        <div className='merkatua'>
          <div className='img'>
          <img src="../../public/images/merkatua.png.png"  />
          </div>
          <p>Merkatua</p>
        </div>
        <div className='aktibitatea'>
          <div className='img'>
          <img src="../../public/images/aktibitatea.png"  />
          </div>
          <p>Aktibitatea</p>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
