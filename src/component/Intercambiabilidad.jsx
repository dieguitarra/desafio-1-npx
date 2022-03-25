import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";
import ItemCount from "./ItemCount/ItemCount";
import ItemDetail from "./ItemDetail/ItemDetail";

const InputCount = () => {
  return (
    <Link to="/cart">
      <button
        className="btn btn-outline-primary"
        onClick={() => console.log("ir al cart")}
      >
        Ir al Cart o Terminar compra
      </button>
      <button
        className="btn btn-outline-secondary"
        onClick={() => console.log("Seguir comprando")}
      >
        Seguir comprando
      </button>
    </Link>
  );
};

const ButtonCount = ({ handleInter }) => {
  return (
    <button className="btn btn-outline-success" onClick={handleInter}>
      Agregar Al carrito
    </button>
  );
};

const Intercambiabilidad = () => {
  const [inputType, setInputType] = useState("button");

  const handleInter = () => {
    setInputType("input");
  };

  return (
    <div>
      {inputType === "button" ? (
        <ButtonCount handleInter={handleInter} />
      ) : (
        <InputCount />
      )}
      {/* <Count onConfirm={addToCart} maxQuantity={itemMax} />  */}
    </div>
  );
};

export default Intercambiabilidad;
