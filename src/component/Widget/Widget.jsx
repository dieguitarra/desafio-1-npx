import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";
import { useCartContext } from "../../context/CartContext";

function Widget() {
  const { cantidad, cartList } = useCartContext();
  return (
    <div className="link">
      <FontAwesomeIcon icon={faCartShopping} className="px-2" />
      {cartList.length > 0 && cantidad()}
    </div>
  );
}

export default Widget;
