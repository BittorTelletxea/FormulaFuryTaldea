import '../css/orriNagusia/nagusia.css';
import Liga from '../components/Ligak';

function Nagusia() {
  return (
    <>
      <div className='container'>
        <div className='ligak-kudeatu'>
          <div className='sortu'>
              <p>NIRE LIGAK</p>
              <button className='sortuLiga'>LIGA SORTU</button>
          </div>
          <Liga />  
        </div>
      </div>
    </>
  );
}

export default Nagusia;
