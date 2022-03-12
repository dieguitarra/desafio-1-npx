import ItemCount from "./ItemCount";
function Item({ prod, loading }) {
  console.log({ prod });
  const { category, name, price, stock, id } = prod;

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="card" key={id} style={{ widht: "18rem" }}>
          <div className="card-body">
            <p className="card-text">{description}</p>
            <ItemCount stock={stock} initial={1} />
          </div>
        </div>
      )}
    </div>
  );
}
export default Item;
