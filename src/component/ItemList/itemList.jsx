import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <div>
      {prods.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default ItemList;
