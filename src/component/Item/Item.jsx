import { Link } from "react-router-dom";

function Item({ prod }) {
  return (
    <Link to={`detalle/${prod.id}`}>
      <div
        // key={prod.id}
        className="col-md-4 mx-auto"
      >
        <div className="card w-100 mt-5">
          <div className="card-header">
            {`${prod.name} - ${prod.categoria}`}
          </div>
          <div className="card-body mx-auto">
            <img src={prod.foto} alt="" className="w-50" />
            {prod.price}
          </div>
          <div className="card-footer">
            Calidad en instrumentos
            {/* <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                            </button>                 */}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
