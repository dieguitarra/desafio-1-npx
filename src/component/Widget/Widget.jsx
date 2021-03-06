import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useCartContext } from "../../context/CartContext";

function Widget() {
  const { amount, cartList } = useCartContext();
  return (
    <div className="py-2">
      <div className="position-relative">
        <FontAwesomeIcon icon={faCartShopping} className="mt-3 mx-2 " />
        <span className="mt-2 position-absolute top-0  translate-middle badge rounded-pill bg-danger">
          {cartList.length > 0 && amount()}
        </span>
      </div>
    </div>
  );
}

export default Widget;
