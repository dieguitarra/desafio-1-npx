import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../component/ItemCount/ItemCount";
import ItemList from "../component/ItemList/itemList";
import { getFetch } from "../helpers/gFetch";
import { doc, getFirestrore } from "firebase/firestore";
function ItemListContiner({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  //console.log(task)
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getFetch
        .then((resp) => setProds(resp.filter((prod) => prod.categoria === id)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch
        .then((resp) => setProds(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);
  //   }, [id]);
  // useEffect(() => {
  //   const db = getFirestrore();
  //   const queryDoc = doc(db, "items", "");
  // }, [id]);

  const onAdd = (cant) => {
    console.log(cant);
  };

  console.log(id);
  return (
    <>
      <div>{saludo}</div>
      {loading ? <h2>Cargando...</h2> : <ItemList prods={prods} />}
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
}

export default ItemListContiner;
