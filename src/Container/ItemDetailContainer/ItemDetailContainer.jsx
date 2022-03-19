import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../component/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/gFetch";

function ItemDetailContianer() {
  const [producto, setProducto] = useState({});

  const { detalleId } = useParams();
  useEffect(() => {
    getFetch
      .then((prod) => prod.find((item) => item.id === detalleId))
      .then((prod) => setProducto(prod))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ItemDetail producto={producto} />
    </div>
  );
}

export default ItemDetailContianer;
