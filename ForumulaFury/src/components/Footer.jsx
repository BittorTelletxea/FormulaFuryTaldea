import '../css/orriNagusia/footer.css';

function Footer() {
  return (
    <>
      <div className='container text-center '>
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
          <p>Klasifikazioa</p>
        </div>
        <div className='taldea'>
          <div className='img'>
          <img src="../../public/images/taldea.png.png"  />
          </div>
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
