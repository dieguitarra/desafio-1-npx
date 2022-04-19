import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import "./Cart.css";

const CartWidget = () => {
  const [dataForm, setDataForm] = useState({ email: "", name: "", phone: "" });
  const [id, setId] = useState(null);
  const { cartList, deleteOne, totalAmount, emptyCart } = useCartContext();
  const generateOrder = async (e) => {
    e.preventDefault();
    let order = {};
    order.buyer = dataForm;
    order.total = totalAmount();

    order.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const name = cartItem.name;
      const price = cartItem.price * cartItem.amount;

      return { id, name, price };
    });

    const db = getFirestore();

    const queryCollectionItems = collection(db, "orders");

    addDoc(queryCollectionItems, order)
      .then((res) => setId(res.id))

      .catch((err) => console.log(err))

      .finally(() => emptyCart());
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
            <img src={prod.photo} className="w-25" alt="imagen" />
            <h6 className="py-1">Nombre: {prod.name}</h6>
            <h6 className="py-1">Precio: {prod.price}$</h6>
            <h6 className="py-1"> Cantidad: {prod.amount}</h6>
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
            <h3>Total de la compra: {totalAmount()}$</h3>
          </label>

          <form className="mt-5" onSubmit={generateOrder}>
            <hr className="container" />
            <h3 className="mb-4 mt-4">
              Completa tus datos para finalizar tu compra:
            </h3>
            <input
              className="mb-2"
              type="text"
              required
              name="name"
              placeholder="Nombre"
              value={dataForm.name}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-2"
              type="text"
              required
              name="phone"
              placeholder="Teléfono"
              value={dataForm.phone}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-2"
              type="email"
              required
              name="email"
              placeholder="Email"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />
            <input
              className="mb-2"
              type="email"
              required
              name="email1"
              placeholder="Repita el email"
              value={dataForm.email}
              onChange={handleChange}
            />
            <br />

            <button className="btn btn-danger mt-4 mb-5" onClick={emptyCart}>
              Vaciar carrito
            </button>
            <button
              className="btn btn-success mx-2 mt-4 mb-5"
              onClick={generateOrder}
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
