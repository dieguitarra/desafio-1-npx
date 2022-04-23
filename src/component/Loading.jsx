import React from "react";

export const Loading = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex justify-content-center">
          <h2 className="mt-4">
            Cargando...
            <img src="/imagenes/loading.gif" height={120} width={120}></img>
          </h2>
        </div>
      </div>
    </div>
  );
};
