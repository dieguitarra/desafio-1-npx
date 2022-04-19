import Item from "../Item/Item";

function ItemList({ prods }) {
  return (
    <div
      className="container"
      // style={{
      //   display: "flex",
      //   flexDirection: "row",
      //   flexWrap: "wrap",
      //   alignContent: "center",
      //   justifyContent: "center",
      // }}
    >
      <div className="row">
        {prods.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </div>
  );
}

export default ItemList;
