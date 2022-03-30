import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setcartList] = useState([]);

  const addToCart = (item) => {
    const foundInstrumento = cartList.find((prod) => prod.name === prod.name);
    if (foundInstrumento) {
      foundInstrumento.cantidad += 1;
      setcartList([...cartList]);
    } else {
      setcartList([...cartList, item]);
    }
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
