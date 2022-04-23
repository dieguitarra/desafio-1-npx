import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <div className="container">
      <div className=" d-flex flex-wrap flex-direction-row justify-content-center">
        {prods.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
