import Titulo from "../Titulo/Titulo";

export default function Input({ placeholder, saludar }) {
  return (
    <div>
      <Titulo titulo="Titulo de input" subtitulo="sub de app" />
      <input type="text" placeholder={placeholder} />
      <button onClick={saludar}>Saludar</button>
    </div>
  );
}
