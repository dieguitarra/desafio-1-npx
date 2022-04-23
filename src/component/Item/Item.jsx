import { Link } from "react-router-dom";

function Item({ prod }) {
  return (
    <div className="text-decoration-none text-dark m-3">
      <div className="card mt-5" style={{ width: "18rem" }}>
        <div className="card-header">
          <p className="fw-bold ">{prod.name}</p>
        </div>
        <div className="card-body">
          <img
            src={prod.photo}
            alt="image"
            className="card-img-top 
            "
          />
        </div>
        <div className="card-footer">
          <Link to={`/detail/${prod.id}`}>
            <button className="btn btn-primary btn-block ">Más info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Item;
