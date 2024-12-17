import '../../../css/orriNagusia/nagusia.css';
import Liga from './Ligak';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

function Nagusia() {
  const { translations } = usePage().props;
  return (
    <>
      <div className='container'>
        <div className='ligak-kudeatu'>
          <div className='sortu'>
              <p>{translations.nagusia.nireligak}</p>
              <button className='sortuLiga'>{translations.nagusia.ligasortu}</button>
          </div>
          <Liga />  
        </div>
      </div>
    </>
  );
}

export default Nagusia;
