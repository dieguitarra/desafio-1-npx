import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  documentId,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";
import "./Cart.css";

const CartWidget = () => {
  const [dataForm, setDataForm] = useState({ email: "", name: "", phone: "" });
  const { id, setId } = useState(null);
  const { cartList, deleteOne, sumaTotal, vaciarCarrito } = useCartContext();
  const generarOrden = async (e) => {
    e.preventDefault();
    let orden = {};
    orden.buyer = dataForm;
    orden.total = sumaTotal();

    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.name;
      const precio = cartItem.price * cartItem.cantidad;

      return { id, nombre, precio };
    });
    const db = getFirestore();
    const queryCollectionItems = collection(db, "orders");
    await addDoc(queryCollectionItems, orden)
      .then(({ id }) => setId(id))
      .catch((err) => console.log(err))
      .finally(() => vaciarCarrito());
  };

  const handleChange = (e) => {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    });
  };
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
      {id && (
        <label className={"alert alert-success"}>
          El id de la compra es: {id}
        </label>
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
          <h4> Total de la compra: ${sumaTotal()} </h4>

          <form className="mt-5" onSubmit={generarOrden}>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={dataForm.name}
              onChange={handleChange}
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="tel"
              value={dataForm.phone}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />
            <input
              type="email"
              name="email1"
              placeholder="repita email"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />

            <button className="btn btn-danger mt-3" onClick={vaciarCarrito}>
              Vaciar carrito
            </button>
            <button
              className="btn btn-success mx-2 mt-3"
              onClick={generarOrden}
            >
              Terminar Compra
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
