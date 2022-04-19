import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../component/ItemList/itemList";
import { getFetch } from "../helpers/gFetch";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
  where,
} from "firebase/firestore";
function ItemListContiner({ saludo }) {
  const [bool, setBool] = useState(true);
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);
  //console.log(task)
  const { id } = useParams();

  useEffect(() => {
    //   if (id) {
    //     getFetch // simulacion a un llamado a una api
    //       .then((resp) => setProds(resp.filter((prod) => prod.categoria === id)))
    //       .catch((err) => console.log(err))
    //       .finally(() => setLoading(false));
    //   } else {
    //     getFetch // simulacion a un llamado a una api
    //       .then((resp) => setProds(resp))
    //       .catch((err) => console.log(err))
    //       .finally(() => setLoading(false));
    //   }
    // }, [id]);

    async function getAll() {
      try {
        const db = getFirestore();
        const queryCollection = collection(db, "items");

        const filterQuery = id
          ? query(queryCollection, where("categoria", "==", id))
          : queryCollection;

        const response = await getDocs(filterQuery);
        setProds(
          response.docs.map((prod) => ({ id: prod.id, ...prod.data() }))
        );
        setLoading(false);
      } catch (error) {}
    }

    getAll();
  }, [id]);

  return (
    <>
      <div>{saludo}</div>
      {loading ? (
        <h2 className="mt-4">Cargando...</h2>
      ) : (
        <ItemList prods={prods} />
      )}
    </>
  );
}

export default ItemListContiner;
