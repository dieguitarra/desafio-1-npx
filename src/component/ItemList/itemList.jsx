import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {prods.map((prod) => (
        <Item key={prod.id} prod={prod} />
      ))}
    </div>
  );
}

export default ItemList;
