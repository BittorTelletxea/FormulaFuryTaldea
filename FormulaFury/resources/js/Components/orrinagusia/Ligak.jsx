import '../../../css/orriNagusia/nagusia.css';
import cascorojo from '../../../images/cascorojo.png';
import trespuntos from '../../../images/trespuntos.png';
import euro from '../../../images/euro.png';

function Ligak() {
  return (
    <>
      <div className='blanco-liga'>
        <div className='ligak-info-ezker'>
          <div className='team'>
            <div className='team2'>
            <img src={cascorojo} alt=""/>
            <h3>F1 Team</h3>
            </div>
          </div>
          <div className='puntuak'>
            <p>4/6</p>
            <p>150 PFRY</p>
          </div>
          </div>
          <div className='ligak-info-eskubi'>
                <div className='dirua'>
                  <div className='diruaDena'>
                    <img className='tres' src={trespuntos} alt="" />
                    <div className='dirua'>
                      <h3>20.000.000</h3>
                      <img src={euro} alt="" />
                    </div>
                  </div>
                </div>
            
          </div>
        </div>
    </>
  );
}

export default Ligak;
