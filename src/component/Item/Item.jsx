import { Link } from "react-router-dom";

function Item({ prod }) {
  return (
    <Link to={`/detalle/${prod.id}`} className="text-decoration-none text-dark">
      <div className="col">
        <div className="col-10">
          <div className="card w-50 mt-5 ">
            <div className="card-header ">
              <p className="fw-bold ">{prod.name}</p>
            </div>
            <div className="card-body">
              <img
                src={prod.foto}
                alt=""
                className="w-50
              "
              />
            </div>
            <div className="card-footer">
              <p className="fw-bold"> {prod.price}$</p>

              {/* <button className="btn btn-outline-primary btn-block">
                                detalle del producto
                              </button>                 */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
