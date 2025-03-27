import React, { useState } from "react";
import "./input.css";

const Inputs = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSumar = () => {
    const suma = parseFloat(num1) + parseFloat(num2);
    setResultado(suma);
  };

  const handleRestar = () => {
    const resta = parseFloat(num1) - parseFloat(num2);
    setResultado(resta);
  };

  const handleDividir = () => {
    const dividir = parseFloat(num1) / parseFloat(num2);
    setResultado(dividir)
  }

  const handleMultiplicar = () => {
    const multiplicar = parseFloat(num1) * parseFloat(num2);
    setResultado(multiplicar)
  }

  const handleLimpiar = () => {
    setNum1("");
    setNum2("");
    setResultado(null);
  }

  return (
    <>
      <div className="card">
        <div className="input">
          <h6 className="titulo">Numero 1:</h6>
          <input
          className="boton"
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </div>
        <br />
        <div className="input">
          <h6 className="titulo">Numero 2:</h6>
          <input
          className="boton"
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <br />
        <div className="botones">
          <button className="botonVerde" onClick={handleSumar}>Sumar</button>
          <button className="botonVerde" onClick={handleRestar}>Restar</button>
          <button className="botonVerde" onClick={handleDividir}>Dividir</button>
          <button className="botonVerde" onClick={handleMultiplicar}>Multiplicar</button>
          <button className="botonVerde" onClick={handleLimpiar}>Limpiar</button>
        </div>
        <br />
        {resultado !== null && <h3>Resultado: {resultado}</h3>}
      </div>
    </>
  );
};

export default Inputs;
