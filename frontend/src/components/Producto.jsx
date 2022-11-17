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
        <h1 className="nombre">ID: [{_id}]</h1>
        <h2 className="precio">Precio: {precio}$</h2>
        <p className="pclass">Categoria: {categoria}</p>
        <p className="pclass">Fecha: {fecha_carga.split("T")[0]}</p>
      </div>
    </div>
  );
}
