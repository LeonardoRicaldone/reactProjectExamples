import "./input.css";

const Inputs = () => {
  return (
    <>
      <div className="card">
        <div className="input">
          <h6 className="titulo">Numero 1:</h6>
          <input type="text" />
        </div>
        <br />
        <div className="input">
          <h6 className="titulo">Numero 2:</h6>
          <input type="text" />
        </div>
        <br />
        <button>Calcular</button>
      </div>
    </>
  );
};

export default Inputs;
