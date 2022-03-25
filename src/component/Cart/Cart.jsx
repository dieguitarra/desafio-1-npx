import React from "react";
import { useCartContext } from "../../context/CartContext";
import "./Cart.css";

function Cart() {
  const { cartList, vaciarCarrito } = useCartContext();
  return (
    <div>
      {cartList.map((prod) => (
        <li key={prod.id}>
          nombre:{prod.name}precio:{prod.price} cantidad:{prod.cantidad}
        </li>
      ))}
      <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  );
}

export default Cart;
