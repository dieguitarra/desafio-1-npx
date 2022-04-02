import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

const CartWidget = () => {
  const { cartList, deleteOne, sumaTotal, vaciarCarrito } = useCartContext();
  return (
    <div>
      <h1 className="text-center">Tus productos</h1>

      {cartList.length === 0 && (
        <div>
          <p>No hay items en tu carrito..</p>
          <Link to="/">
            <button className="btn btn-outline-primary mb-5">
              Continuar comprando
            </button>
          </Link>
        </div>
      )}
      {cartList.map((prod) => (
        <div key={prod.id} className="row">
          <div className="col-md-8">
            <p>Nombre: {prod.name}</p>
            <p>Precio: {prod.price}</p>
            <p> Cantidad: {prod.cantidad}</p>
            <hr />
          </div>
          <div className="col-md-4">
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteOne(prod.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}

      {cartList.length >= 1 && (
        <div>
          <h4> Total de la compra: `${sumaTotal()}` </h4>
          <button className="btn btn-danger" onClick={vaciarCarrito}>
            Vaciar carrito
          </button>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
