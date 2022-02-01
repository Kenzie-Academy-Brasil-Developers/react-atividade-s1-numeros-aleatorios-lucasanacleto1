import { useState } from "react";
import "./style.css";

const Numero = () => {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const randomNumber = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };
  return (
    <div>
      <p className="number">{number}</p>
      <button className="btn" onClick={randomNumber}>
        Gerar numero
      </button>
    </div>
  );
};

export default Numero;
