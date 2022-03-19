import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./component/NavBar/NavBar";
import ItemDetailContainer from "./Container/ItemDetailContainer/ItemDetailContainer";
import Cart from "./component/Cart/Cart";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./Container/ItemListContainer";
function App() {
  // componenete contendor

  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer saludo="hola soy ItemListContiner" />}
          />
          <Route
            path="/categoria/:id"
            element={<ItemListContainer saludo="hola soy ItemListContiner" />}
          />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path='/notFound' element={<Componente404 />}/> */}

          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
