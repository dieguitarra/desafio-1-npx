import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "../component/ItemCount/ItemCount";
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
    if (id) {
      getFetch // simulacion a un llamado a una api
        .then((resp) => setProds(resp.filter((prod) => prod.categoria === id)))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      getFetch // simulacion a un llamado a una api
        .then((resp) => setProds(resp))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [id]);

  // trae un documento
  // useEffect(()=> {
  //     const db = getFirestore()

  //     const queryDoc = doc(db, 'items', 'OFnvgi8PYvV0VJOFwzQ6')
  //     getDoc(queryDoc)
  //     .then(resp => setProd( {id: resp.id, ...resp.data()} ))
  // }, [id])

  // trae toda la collección que tenemos
  // useEffect(()=> {
  //     const db = getFirestore()

  //     const queryCollection =  collection(db, 'items' )
  //     getDocs(queryCollection)
  //     .then(resp => setProds( resp.docs.map(producto =>( {id: producto.id, ...producto.data()}) ) ) )
  //     .catch(err => console.log(err))
  //     .finally(()=> setLoading(false))
  // }, [id])

  // traer productos filtrados por categorías
  // useEffect(() => {
  //   const db = getFirestore();

  //   const queryCollection = collection(db, "items");
  //   const queryFilter = query(
  //     queryCollection,
  //     // where('categoria','==','remeras'),
  //     where("price", ">=", 1000),
  //     limit(1)
  //   );
  //   getDocs(queryFilter)
  //     .then((resp) =>
  //       setProds(
  //         resp.docs.map((producto) => ({ id: producto.id, ...producto.data() }))
  //       )
  //     )
  //     .catch((err) => console.log(err))
  //     .finally(() => setLoading(false));
  // }, [id]);

  //  console.log(prods);
  return (
    <>
      <div>{saludo}</div>
      {loading ? <h2>Cargando...</h2> : <ItemList prods={prods} />}
    </>
  );
}

export default ItemListContiner;
