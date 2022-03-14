import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";

function App() {
  const title = "Bienvenidos!";
  const card = "Soy el producto";
  return (
    <div className="App">
      <NavBar />
      <p>Desafío 4 y 5 - Diego López</p>
      <ItemListContainer titulo={title} card={card} />
    </div>
  );
}

export default App;
