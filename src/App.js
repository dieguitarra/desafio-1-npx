import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Container/ItemListContainer";
import Footer from "./component/Footer/Footer";

function App() {
  // console.log(CartContext);
  // componenete contendor
  const {} = useParams();
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div
          className="App"
          // onClick={() => alert("App")}
        >
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  saludo={
                    <h1 className="mt-5 "> Bienvenidos a Muscal World </h1>
                  }
                />
              }
            />
            <Route
              path="/categoria/:id"
              element={
                <ItemListContainer saludo={<h1 className="mt-5 ">{}</h1>} />
              }
            />
            <Route
              path="/detalle/:detalleId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path='/notFound' element={<Componente404 />}/> */}

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
      <Footer />;
    </BrowserRouter>
  );
}

export default App;
