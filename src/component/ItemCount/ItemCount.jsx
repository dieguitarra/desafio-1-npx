import { React, useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const addition = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const subtraction = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const add = () => {
    onAdd(count);
  };
  return (
    <>
      <div className="py-3">
        <label className=" p-2 border border-1 rounded">
          <button className="btn btn-secondary" onClick={subtraction}>
            -
          </button>
          <span className="mx-2">{count}</span>
          <button className="btn btn-primary" onClick={addition}>
            +
          </button>
        </label>
      </div>
      <button className="btn btn-primary mb-3" onClick={add}>
        Agregar al carrito
      </button>
    </>
  );
};

export default ItemCount;
