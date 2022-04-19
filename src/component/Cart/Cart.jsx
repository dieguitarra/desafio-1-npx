import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
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
  const [id, setId] = useState(null);
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

    addDoc(queryCollectionItems, orden)
      .then((res) => setId(res.id))

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
      <h1 className="text-center mt-5 mb-5">Tus productos</h1>

      {cartList.length === 0 && (
        <div>
          <h4 className="mb-5">No hay items en tu carrito...</h4>
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
        <div key={prod.id} className="row container mx-auto">
          <hr />
          <div className="col-sm-8 mt-3">
            <img src={prod.foto} className="w-25" alt="imagen" />
            <h6 className="py-1">Nombre: {prod.name}</h6>
            <h6 className="py-1">Precio: {prod.price}$</h6>
            <h6 className="py-1"> Cantidad: {prod.cantidad}</h6>
          </div>

          <div className="col-sm-4 d-flex align-items-center justify-content-center">
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteOne(prod.id)}
            >
              Eliminar <FontAwesomeIcon icon={faTrash} className="px-2" />
            </button>
          </div>
        </div>
      ))}

      {cartList.length >= 1 && (
        <div>
          <hr className="container" />
          <label className={"alert alert-success mt-5 p-3 text-dark"}>
            <h3>Total de la compra: {sumaTotal()}$</h3>
          </label>

          <form className="mt-5" onSubmit={generarOrden}>
            <hr className="container" />
            <h3 className="mb-4 mt-4">
              Completa tus datos para finalizar tu compra:
            </h3>
            <input
              className="mb-2"
              type="text"
              name="name"
              placeholder="nombre"
              value={dataForm.name}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-2"
              type="text"
              name="phone"
              placeholder="teléfono"
              value={dataForm.phone}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-2"
              type="email"
              name="email"
              placeholder="email"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-2"
              type="email"
              name="email1"
              placeholder="repita el email"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />

            <button
              className="btn btn-danger mt-4 mb-5"
              onClick={vaciarCarrito}
            >
              Vaciar carrito
            </button>
            <button
              className="btn btn-success mx-2 mt-4 mb-5"
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
