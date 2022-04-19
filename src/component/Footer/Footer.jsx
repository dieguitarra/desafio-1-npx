import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-white py-5 bg-dark mt-5 ">
      <div className="container">
        <nav className="row">
          <Link
            to="/"
            className="col-12 col-md-3 d-flex align-items-center justify-content-center"
          >
            <img
              src="./imagenes/logo.jpg"
              className="rounded"
              alt="logo"
              height={80}
              width={80}
            ></img>
          </Link>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="fw-bold mb-2 text-center fs-5">Musical Wolrd</li>
            <li className="text-center">
              En este sitio web encontrarás todo lo que siempre soñaste al mejor
              precio.
            </li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled text-center ">
            <li className="fw-bold mb-2 fs-5">Categorías</li>

            <li>
              <Link
                to="/category/Guitarras"
                className="text-decoration-none text-reset"
              >
                Guitarras
              </Link>
            </li>
            <li>
              <Link
                to="/category/Bajos"
                className="text-decoration-none text-reset"
              >
                Bajos
              </Link>
            </li>
            <li>
              <Link
                to="/category/Pianos"
                className="text-decoration-none text-reset"
              >
                Pianos
              </Link>
            </li>
            <li>
              <Link
                to="/category/Baterias"
                className="text-decoration-none text-reset"
              >
                Baterías
              </Link>
            </li>
          </ul>

          <ul className="col-12 col-md-3 list-unstyled fs-5">
            <li className="fw-bold mb-2 text-center">Síguenos</li>
            <li className="text-center">
              <i className="bi bi-facebook mx-2" />
              <i className="bi bi-instagram mx-2" />
              <i className="bi bi-twitter mx-2" />
              <i className="bi bi-youtube mx-2" />
            </li>
          </ul>
          <div className="container">
            <p className="text-center mt-5">
              Desarrollado por Diego López en 2022
            </p>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
