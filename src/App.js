import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>Desafío 2 y 3 - Diego López</p>
      <ItemListContainer saludo="Hola soy ItemListContainer" />
    </div>
  );
}

export default App;
