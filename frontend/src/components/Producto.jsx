import React from "react";

export default function Producto({
  precio,
  categoria,
  fecha_carga,
  _id,
}) {
  return (
    <div className="cardItem">
      <div className="card">
        <h1 className="nombre">ID{_id}</h1>
        <h2>Precio:{precio}$</h2>
        <p>Categoria:{categoria}</p>
        <p>Fecha:{fecha_carga}</p>
      </div>
    </div>
  );
}
