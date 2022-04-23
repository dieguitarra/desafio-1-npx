import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Container/ItemListContainer";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <div className="App">
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <ItemListContainer
                  greetings={
                    <h2 className="py-2 bg-primary text-white">
                      Bienvenidos a Musical World
                    </h2>
                  }
                />
              }
            />
            <Route
              path="/category/:id"
              element={
                <ItemListContainer
                  greetings={
                    <h2 className="py-2 bg-primary text-white">
                      Bienvenidos a Musical World
                    </h2>
                  }
                />
              }
            />
            <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart />} />

            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </CartContextProvider>
      <Footer />;
    </BrowserRouter>
  );
}

export default App;
