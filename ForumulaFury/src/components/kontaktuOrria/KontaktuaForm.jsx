import '../../css/kontaktuaOrria/kontaktua.css';

function Kontaktua() {
  return (
    <>
        <div className='kontaktatu'>
                <p>GUREKIN KONTAKTATU</p><br/>
            <div className='blanco2'>
                <div className='kontakt'>
                    <p>Zure iritzia garrantzitsua da guretzat!</p>
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail">Izena: </label>
                                <input type="email" className="form-control" id="inputEmail" placeholder="izena"/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="abizenaInput">Abizena: </label>
                                <input type="password" className="form-control" id="abizenaInput" placeholder="abizena"/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="emailInput">email: </label>
                                <input type="email" className="form-control" id="emailInput" placeholder="email"/>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="mezuaInput">Mezua: </label>
                                <textarea name="mazuaInput" id="mezuaInput"></textarea>
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