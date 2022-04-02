import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    if (isInCart(item.id)) {
      const prod = cartList.find((p) => p.id === item.id);
      const { cantidad } = prod;

      prod.cantidad = item.cantidad + cantidad;
      const newCart = [...cartList];
      setCartList(newCart);
    } else {
      setCartList([...cartList, item]);
    }
  }
  const vaciarCarrito = () => {
    setCartList([]);
  };
  const isInCart = (id) => {
    //devuelve un booleano
    return cartList.some((prod) => prod.id === id);
  };
  const deleteOne = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };
  const sumaTotal = () => {
    return cartList.reduce(
      (acum, prod) => (acum += prod.price * prod.cantidad),
      0
    );
  };
  const cantidad = () => {
    return cartList.reduce((acum, prod) => (acum += prod.cantidad), 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        vaciarCarrito,
        deleteOne,
        sumaTotal,
        cantidad,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
