
import React, { useRef, useState } from "react";

function Kontaktua() {
    const [value, setValue] = useState(""); 
    const textareaRef = useRef(null); 
  
    const handleInput = (e) => {
      const textarea = textareaRef.current;
      setValue(e.target.value);
      textarea.style.height = "auto"; 
      textarea.style.height = `${textarea.scrollHeight}px`; 
    };
  return (
    <>
        <div className='kontaktatu'>
            <div>
                <h1>GUREKIN KONTAKTATU</h1><br/>
            </div>  
            <div className='blanco2'>
                <div className='kontakt'>
                    <p>Zure iritzia garrantzitsua da guretzat!</p>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                
                                <input type="text"  id="inputEmail" placeholder="izena"/>
                                
                                
                                <input type="text" id="abizenaInput" placeholder="abizena"/>
                            </div>
                            <div className="form-group col-md-6">
                                
                                <input type="email" id="emailInput" placeholder="email"/>
                                
                                <input type="number" id="telInput" placeholder="640 26 60 09"/>
                            </div>
                            <div className="form-group col-md-6">
                                
                                <textarea 
                                    name="mazuaInput" 
                                    id="mezuaInput"
                                    placeholder='Idatzi beharrezko mezua...'
                                    ref={textareaRef}
                                    value={value}
                                    onChange={handleInput} 
                                ></textarea>
                            </div>
                            <div className="form-group">
                                
                                <button className='bidali'>Bidali</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Kontaktua;