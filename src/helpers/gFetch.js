const productos = [
  {
    id: "1",
    categoria: "guitarras",
    name: "Guitarra Stratocaster Fender",
    price: "196.000$",
    stock: 6,
    description: "Guitarra Stratocaster hecha en EEUU, en el año 2020",
    foto: "/imagenes/stratocaster.jpg",
  },

  {
    id: "2",
    categoria: "guitarras",
    name: "Guitarra Telecaster Fender",
    price: "230.000$",
    stock: 6,
    description: "Guitarra Telecaster hecha en México, en el año 2018",
    foto: "/imagenes/telecaster.jpg",
  },
  {
    id: "3",
    categoria: "guitarras",
    name: "Guitarra LesPaul EKO VL-480 BK",
    price: "59.000$",
    stock: 6,
    description: "Guitarra LesPaul hecha en China, en el año 2017",
    foto: "/imagenes/lespaul.jpg",
  },
  {
    id: "4",
    categoria: "bajos",
    name: "Bajo Fender",
    price: "346.000$",
    stock: 6,
    description: "Bajo Fender hecho en EEUU, en el año 2021",
    foto: "/imagenes/jazzbass.jpg",
  },
  {
    id: "5",
    categoria: "pianos",
    name: "Piano Yamaha",
    price: "161.000$",
    stock: 6,
    description: "Piano Yamaha hecho en EEUU, en el año 2016",
    foto: "/imagenes/yamaha.jpg",
  },
  {
    id: "6",
    categoria: "baterias",
    name: "Batería Saturn V Exotic 5 C Studio, H. Black, B22 X18 , Tt",
    price: " 153.783$",
    stock: 5,
    description:
      "Batería SATURN V Exotic 5 c Studio, H. Black, B22 x18, TT10 x8 /12 x9 , TF16 /14 , Cherry Mist Maple Burl",
    foto: "imagenes/bateriaRoja.jpg",
  },
];
export const getFetch = new Promise((resolve, reject) => {
  //acciones
  let condition = true;
  if (condition) {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  } else {
    reject("400 - not found");
  }
});
