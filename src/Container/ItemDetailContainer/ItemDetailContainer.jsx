import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../component/ItemDetail/ItemDetail";
import { Loading } from "../../component/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";
function ItemDetailContianer() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const { detailId } = useParams();
  useEffect(() => {
    async function getById() {
      try {
        const db = getFirestore();
        const item = doc(db, "items", detailId);
        const response = await getDoc(item);

        setProduct({ id: response.id, ...response.data() });
        setLoading(false);
      } catch (error) {}
    }

    getById();
  }, [detailId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ItemDetail
          product={product}
          key={product.id}
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
