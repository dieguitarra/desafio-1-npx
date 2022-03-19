function ItemDetail({ producto }) {
  return (
    <div>
      <img src={producto.foto} alt="imagen" />
      <p className="alert alert-primary w-25 mx-auto">{producto.name}</p>
      <p className="alert alert-primary w-25 mx-auto">{producto.price}</p>
      <p className="alert alert-primary w-25 mx-auto">{producto.categoria}</p>
    </div>
  );
}

export default ItemDetail;
