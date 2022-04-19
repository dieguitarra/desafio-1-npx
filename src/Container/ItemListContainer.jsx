import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemList from "../component/ItemList/itemList";

import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
function ItemListContiner({ greetings }) {
  const [loading, setLoading] = useState(true);
  const [prods, setProds] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    async function getAll() {
      try {
        const db = getFirestore();
        const queryCollection = collection(db, "items");

        const filterQuery = id
          ? query(queryCollection, where("category", "==", id))
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
      <div>{greetings}</div>
      {loading ? (
        <h2 className="mt-4">Cargando...</h2>
      ) : (
        <ItemList prods={prods} />
      )}
    </>
  );
}

export default ItemListContiner;
