import { useState } from 'react';
import '../../css/taldeaOrria/taldea.css';
import F2gidaria from './F2gidaria';
import F2gidaria2 from './F2gidaria2';
import F1gidaria from './F1gidaria';
import F1gidaria2 from './F1gidaria2';
import F1taldea from './F1Ttaldea';
import Footer from './Footer';
import Header from './Header';


function Taldea() {
  return (
    <>
      <div className="main-container">
        <Header />
        <div className="talde">
          <div className="plantilla">
            <div className="plantillaLetra">
              <p>PLANTILLA</p>
            </div>
            <div className="totala">
              <p className="text-white">5/5</p>
            </div>
          </div>
          <div className="lasterketa">
            <div className="lasterketaLetra">
              <p>LATERKETA</p>
            </div>
            <div className="eguna">
              <p className="text-white">IGA 5 , 20:00 </p>
            </div>
          </div>
          <div className="balorea">
            <div className="baloreaLetra">
              <p>BALOREA</p>
            </div>
            <div className="totalaBalorea">
              <p className="text-white">560.000.000</p>
              <img src="/public/images/euroTaldea.png" alt="" />
            </div>
          </div>
        </div>
        <div className="logoak">
          <div className="f1Class">
            <img className="f1" src="/public/images/f1.png" alt="" />
            <div className="f1gidariak">
              <F1gidaria />
              <F1gidaria2 />
            </div>
          </div>
          <div className="f2Class">
            <img className="f2" src="/public/images/f2.png" alt="" />
            <div className="f2gidariak">
              <F2gidaria />
              <F2gidaria2 />
            </div>
          </div>
          <div className="f1taldea">
            <F1taldea />
          </div>
        </div>
      </div>
      <Footer /> 
    </>
  );
}

export default Taldea;


