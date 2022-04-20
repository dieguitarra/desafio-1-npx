import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);
export const useCartContext = () => useContext(CartContext);

function CartContextProvider({ children }) {
  const [cartList, setCartList] = useState([]);

  function addToCart(item) {
    if (isInCart(item.id)) {
      const prod = cartList.find((p) => p.id === item.id);
      const { amount } = prod;

      prod.amount = item.amount + amount;
      const newCart = [...cartList];
      setCartList(newCart);
    } else {
      setCartList([...cartList, item]);
    }
  }
  const emptyCart = () => {
    setCartList([]);
  };
  const isInCart = (id) => {
    return cartList.some((prod) => prod.id === id);
  };
  const deleteOne = (id) => {
    setCartList(cartList.filter((prod) => prod.id !== id));
  };
  const totalAmount = () => {
    return cartList.reduce(
      (acum, prod) => (acum += prod.price * prod.amount),
      0
    );
  };
  const amount = () => {
    return cartList.reduce((acum, prod) => (acum += prod.amount), 0);
  };
  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        emptyCart,
        deleteOne,
        totalAmount,
        amount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
