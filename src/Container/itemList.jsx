import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = ({ card }) => {
  const [listaProductos, setListaProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const productos = [
    {
      id: "1",
      name: "Guitarra Stratocaster",
      category: "guitarra",
      price: "200.000$",
      stock: 6,
      description: "Guitarra Stratocaster hecha en EEUU, en el año 2020",
    },
    {
      id: "2",
      name: "Guitarra Telecaster",
      category: "guitarra",
      price: "250.000$",
      stock: 6,
      description: "Guitarra Telecaster hecha en México, en el año 2018",
    },
    {
      id: "3",
      name: "Guitarra LesPaul",
      category: "guitarra",
      price: "300.000$",
      stock: 6,
      description: "Guitarra LesPaul hecha en Indonesia, en el año 2017",
    },
    {
      id: "4",
      name: "Bajo Fender",
      category: "bajo",
      price: "100.000$",
      stock: 6,
      description: "Bajo Fender hecho en EEUU, en el año 2021",
    },
    {
      id: "5",
      name: "Piano Yamaha",
      category: "piano",
      price: "200.000$",
      stock: 6,
      description: "Piano Yamaha hecho en EEUU, en el año 2016",
    },
  ];
  const getProducts = new Promise((resolve, reject) => {
    //acciones
    let condicion = true;
    if (condicion) {
      setTimeout(() => {
        resolve(productos);
      }, 3000);
    } else {
      reject("error");
    }
  });
  useEffect(() => {
    getProducts
      .then((respuesta) => setListaProductos(respuesta))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);
  console.log("la respuesta", listaProductos);

  return (
    <div>
      <h2>Nuestros productos:</h2>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        listaProductos.map((producto) => (
          <Item card={card} producto={producto} key={producto.id} />
        ))
      )}
    </div>
  );
};
export default ItemList;
