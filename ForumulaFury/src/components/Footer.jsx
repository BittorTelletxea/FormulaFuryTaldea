import '../css/footer.css';

function Footer() {
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
        <div className='ligak'>
          <div className='img'>
          <img src="../../public/images/ligakSelected.png.png"  />
          </div>
          <p>Ligak</p>
        </div>
        <div className='klasifikazioa'>
          <div className='img'>
          <img src="../../public/images/klasifikazioa.png.png"  />
          </div>
          <a href="kontaktua.html">
          Klasifikazioa
          </a>
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
