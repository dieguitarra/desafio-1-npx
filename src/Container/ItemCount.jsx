import { React, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <div className="mt-2 mb-2">
        <button className="btn btn-secondary" onClick={restar}>
          -
        </button>
        <span className="mx-2">{count}</span>
        <button className="btn btn-primary" onClick={sumar}>
          +
        </button>
      </div>
      <button className="btn btn-outline-primary" onClick={onAdd}>
        {" "}
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
