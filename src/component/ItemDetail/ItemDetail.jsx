import { useCartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Input } from "../../Input";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
function ItemDetail({ producto, loading, setLoading }) {
  const [comprar, setComprar] = useState(false);
  const [count, setCount] = useState(1);
  const { addToCart } = useCartContext();
  const navegar = useNavigate();
  const onAdd = (cant) => {
    console.log(cant);
    addToCart({ ...producto, cantidad: cant });
    setComprar(true);
    setLoading(false);
  };
  // console.log(cartList);
  return (
    <div>
      <img src={producto.foto} alt="imagen" />
      <p className="alert alert-primary w-25 mx-auto">{producto.name}</p>
      <p className="alert alert-primary w-25 mx-auto">{producto.price}</p>
      <p className="alert alert-primary w-25 mx-auto">{producto.categoria}</p>
      {!comprar && (
        <ItemCount
          initial={1}
          stock={5}
          onAdd={onAdd}
          count={count}
          setCount={setCount}
        />
      )}
      {comprar && (
        <div>
          <button className="btn btn-primary mx-2" onClick={() => navegar("/")}>
            Seguir comprando
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navegar("/cart")}
          >
            Ir al carrito
          </button>
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
