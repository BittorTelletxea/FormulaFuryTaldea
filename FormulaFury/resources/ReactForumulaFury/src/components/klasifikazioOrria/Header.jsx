import { useState } from 'react';
import '../../css/klasifikazioOrria/header.css';




function Header() {
  return (
    <>
    <div className='dena'>
      <div className='header'>
        <p className='f1'>F1 TEAM </p>
        <p> KONPETIZIOA</p>
      </div>
      <div className='plus'>
        <img src="/public/images/plus.png" alt="" />
      </div>
      </div>
    </>
  );
}

export default Header;
