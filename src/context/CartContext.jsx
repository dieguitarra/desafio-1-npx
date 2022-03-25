import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  const addToCart = (item) => {
    // repita duplicado
    setcartList([...cartList, item]);
  };
  const vaciarCarrito = () => {
    setcartList([]);
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        vaciarCarrito,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
