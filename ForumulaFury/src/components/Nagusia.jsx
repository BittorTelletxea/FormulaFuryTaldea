import '../css/orriNagusia/nagusia.css';
import Liga from '../components/Ligak';

function Nagusia() {
  return (
    <>
      <div id="nagusia" className='container'>
        <div className='ligak-kudeatu'>
          <div className='liga-sortu'>
              <h4>NIRE LIGAK</h4>
              <button>LIGAK SORTU</button>
          </div>
          <Liga />  
        </div>
      </div>
    </>
  );
}

export default Nagusia;
