import React, { useState } from "react";
import ItemCount from "./ItemCount";
const Item = ({ producto }) => {
  const [show, setShow] = useState(false);
  const verMas = () => {
    console.log(show);
    setShow(!show);
  };
  const onAdd = () => {
    console.log("agregué al carrito");
  };
  return (
    <div className="card-group">
      <div className="card" style={{ width: " 18rem" }}>
        <img src={producto.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{producto.name}</h5>
          {show && <p>{producto.description}</p>}
          <button className="btn btn-outline-secondary" onClick={verMas}>
            {show ? "Ver menos" : "Ver mas"}
          </button>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default Item;
