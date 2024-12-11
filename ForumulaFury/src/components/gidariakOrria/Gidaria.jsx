import { useState } from 'react';
import '../../css/gidariaOrria/gidaria.css';

import Footer from './Footer';
import Header from './Header';


function Gidaria() {
  return (
    <>
       <div className='main-gidari'>
        <div className='datuak'>
        <img src="/public/images/verstappen.png" alt="" />
        <div className='gidariDatuak'>
        <div className='usuario'>
        <div className='mota'>
            <p>PIL</p>
        </div>
        <div className='usuarioIzena'>
        <p className='text-white'>MAX VERSTAPPEN</p>
        </div>
        </div>
        <div className='f1LogoGidari'>
            <img src="/public/images/f1.png" alt="" />
        </div>
        <div className='gidariEgoera'>
        <img src="/public/images/tick.png" alt="" />
        <p>Disponible</p>
        </div>
        </div>
        
        </div>
        <div className='puntuDiv'>
        <div className='puntuak'>
          <p className='punto'>PRFY</p>
          <p className='prfy'>400</p>
        </div>
        <div className='balore'>
          <p className='valor'>Valor</p>
          <p className='numeroValor'>70.256.987</p>
        </div>
        <div className='klausula'>
            <div className='candado'>
          <img src="/public/images/candadoRojo.png" alt="" />
          </div>
          <p className='numeroPrecio'>15 egun</p>
        </div>
        </div>
        </div>
    </>
  );
}

export default Gidaria;


