import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./component/NavBar/NavBar";
import ItemListContainer from "./Container/ItemListContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faComment } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faApple } from "@fortawesome/free-brands-svg-icons";

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
