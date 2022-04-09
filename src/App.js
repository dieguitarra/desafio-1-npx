import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Container/ItemListContainer";
function App() {
  // console.log(CartContext);
  // componenete contendor

  return (
    <BrowserRouter>
      <CartContextProvider>
        <div
          className="App border border-primary border-3"
          // onClick={() => alert("App")}
        >
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer saludo="Bienvenidos a Muscal World" />
              }
            />
            <Route
              path="/categoria/:id"
              element={
                <ItemListContainer saludo="Bienvenidos a Muscal World" />
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
    </BrowserRouter>
  );
}

export default App;
