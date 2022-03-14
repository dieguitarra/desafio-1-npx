import React from "react";
import ItemList from "./itemList";

const ItemListContainer = ({ titulo, card }) => {
  return (
    <div>
      <h1>{titulo}</h1>
      <ItemList card={card} />
    </div>
  );
};

export default ItemListContainer;
