import { React, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const agregar = () => {
    onAdd(count);
  };
  return (
    <>
      <div className="py-3">
        <label className=" p-2 border border-1 rounded">
          <button className="btn btn-secondary" onClick={restar}>
            -
          </button>
          <span className="mx-2">{count}</span>
          <button className="btn btn-primary" onClick={sumar}>
            +
          </button>
        </label>
      </div>
      <button className="btn btn-outline-primary mb-3" onClick={agregar}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
