import '../../css/klasifikazioOrria/jokalaria.css';

function Total() {
  return (
    <>
    <div className='totalDiv'>
      <div className='total'>
        <p>Total</p>
        <img src="/public/images/flechaabajo.png" alt="" />
        </div>
        <div className='formula'>
        <p>FORMULA FURY</p>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
        />
        <button className="search-button">
          <img src="/public/images/lapiz.png" alt="Buscar" />
        </button>
      </div>
    </>
  );
}

export default Total;
