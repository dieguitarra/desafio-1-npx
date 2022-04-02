import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../component/ItemDetail/ItemDetail";
import { getFetch } from "../../helpers/gFetch";
import { Loading } from "../../component/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";
function ItemDetailContianer() {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  const { detalleId } = useParams();
  useEffect(() => {
    //   getFetch
    //     .then((prod) => prod.find((item) => item.id === detalleId))
    //     .then((prod) => setProducto(prod))
    //     .catch((err) => console.log(err));
    // }, []);
    async function getById() {
      try {
        const db = getFirestore();
        const item = doc(db, "items", detalleId);
        const response = await getDoc(item);

        setProducto({ id: response.id, ...response.data() });
        setLoading(false);
      } catch (error) {
        /* Manejo de Errores */
      }
    }

    getById();

    // getItems
    //   .then((res) => setProducto(res.find(prod => prod.id === productId )))
    //   .catch((err) => console.log(err))
    //   .finally(()=> setLoading(false))
  }, [detalleId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          producto={producto}
          key={producto.id}
          loading={loading}
          setLoading={() => {
            setLoading();
          }}
        />
      )}
    </>
  );
}

export default ItemDetailContianer;
