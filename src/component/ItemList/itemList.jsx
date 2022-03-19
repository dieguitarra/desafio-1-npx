import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <>
      {prods.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </>
  );
}

export default ItemList;
