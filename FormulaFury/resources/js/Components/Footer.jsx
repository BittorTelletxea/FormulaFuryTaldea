import '../../css/footer.css';
import ligakImg from '../../images/ligakSelected.png.png';
import klasifikazioaImg from '../../images/klasifikazioa.png.png';
import taldeaImg from '../../images/taldea.png.png';
import merkatuaImg from '../../images/merkatua.png.png';
import aktibitateaImg from '../../images/aktibitatea.png';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

function Footer() {
  const { translations } = usePage().props;
  return (
    <>
      <div className='container1 text-center fixed-bottom'>
        <div className='argazkiak'>
          <div className='ligak'>
            <div className='img'>
              <img src={ligakImg} alt="Ligak" />
            </div>
            <a href="nagusia">
              <p>{translations.footer.ligak}</p>
            </a>
          </div>
          <div className='klasifikazioa'>
            <div className='img'>
              <img src={klasifikazioaImg} alt="Klasifikazioa" />
            </div>
            <a href="klasifikazioa">
              {translations.footer.klasifikazioa}
            </a>
          </div>
          <div className='taldea'>
            <img src={taldeaImg} alt="Taldea" />
            <a href="taldea">
              <p>{translations.footer.taldea}</p>
            </a>
          </div>
          <div className='merkatua'>
            <div className='img'>
              <img src={merkatuaImg} alt="Merkatua" />
            </div>
            <p>{translations.footer.merkatua}</p>
          </div>
          <div className='aktibitatea'>
            <div className='img'>
              <img src={aktibitateaImg} alt="Aktibitatea" />
            </div>
            <p>{translations.footer.aktibitatea}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
