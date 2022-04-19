import { useCartContext } from "../../context/CartContext";
import { useContext, useState } from "react";
import { Input } from "../../Input";
import ItemCount from "../ItemCount/ItemCount";
import { useNavigate } from "react-router-dom";
function ItemDetail({ product, loading, setLoading }) {
  const [comprar, setComprar] = useState(false);
  const [count, setCount] = useState(1);
  const { addToCart } = useCartContext();
  const navegar = useNavigate();
  const onAdd = (cant) => {
    console.log(cant);
    addToCart({ ...product, cantidad: cant });
    setComprar(true);
    setLoading(false);
  };
  // console.log(cartList);
  return (
    <div className="py-5">
      <h1>Detalle de tu producto</h1>
      {
        //style="max-width: 540px;">

        <div className="card container mt-5">
          <div className="row g-0">
            <div className="col-12 col-md-4 d-flex align-items-center justify-content-center ">
              <img
                src={product.photo}
                className="img-fluid rounded-start w-75"
                alt="imagen"
              />
            </div>
            <div className="col-12 col-md-8 mt-5">
              <div className="card-body px-5">
                <h2 className="card-title mt-2">{product.name}</h2>
                <h6 className="card-text mt-5">{product.description}</h6>
                <div className="card-text">
                  <h5 className="mt-5 mb-3">{product.price}$</h5>
                </div>

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
                    <button
                      className="btn btn-primary my-3 mx-2"
                      onClick={() => navegar("/")}
                    >
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
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default ItemDetail;
