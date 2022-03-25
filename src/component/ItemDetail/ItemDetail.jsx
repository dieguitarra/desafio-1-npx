import { useCartContext } from "../../context/CartContext";
import { useContext } from "react";
import { Input } from "../../Input";
import ItemCount from "../ItemCount/ItemCount";
import Intercambiabilidad from "../Intercambiabilidad";
function ItemDetail({ producto }) {
  const { addToCart } = useCartContext();
  const onAdd = (cant) => {
    console.log(cant);
    addToCart({ ...producto, cantidad: cant });
  };
  // console.log(cartList);
  return (
    <div>
      <Intercambiabilidad />
      <img src={producto.foto} alt="imagen" />
      <p className="alert alert-primary w-25 mx-auto">{producto.name}</p>
      <p className="alert alert-primary w-25 mx-auto">{producto.price}</p>
      <p className="alert alert-primary w-25 mx-auto">{producto.categoria}</p>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </div>
  );
}

export default ItemDetail;
