import React from "react";
import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  function handleIncrease() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  function handleDecrease() {
    if (count > initial) {
      setCount(count - 1);
    }
  }
  const add = () => {
    console.log(count);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-1">
          <div className="row">
            <div className="d-flex justify-content-around col-1">
              <button className="btn-sm btn-succes" onClick={handleDecrease}>
                -
              </button>

              <button className="btn-sm btn-succes" onClick={handleIncrease}>
                +
              </button>
            </div>
            <div>className="mt-5 col-1</div>
            <button className="btn btn-outline-success" onClick={add}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
