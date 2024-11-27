import '../footer.css';

function Footer() {
  return (
    <>
      <div className='container text-center '>
        <div className='argazkiak'>
        <div className='ligak'>
          <div>
          <img src="../../public/images/ligakSelected.png.png"  />
          </div>
          <p>Ligak</p>
        </div>
        <div className='klasifikazioa'>
          <div>
          <img src="../../public/images/klasifikazioa.png.png"  />
          </div>
          <p>Klasifikazioa</p>
        </div>
        <div className='taldea'>
          <div>
          <img src="../../public/images/taldea.png.png"  />
          </div>
          <p>Taldea</p>
        </div>
        <div className='merkatua'>
          <img src="../../public/images/merkatua.png.png"  />
          <p>Merkatua</p>
        </div>
        <div className='aktibitatea'>
          <img src="../../public/images/aktibitatea.png"  />
          <p>Aktibitatea</p>
        </div>
        </div>
        
      </div>
    </>
  );
}

export default Footer;
