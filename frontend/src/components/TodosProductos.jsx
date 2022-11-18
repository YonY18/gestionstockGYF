import React from "react";
import { useSelector } from "react-redux";
import Producto from "./Producto.jsx";

function TodosProductos() {
    const productos = useSelector((state) => state.filterProductos)
    console.log(productos)


  return (
    <div className="contenedorHomeTot">
    <h1 className="titulo">Productos</h1>
    <div className="contenedorHome">
      
      {productos?.length > 0 ? (
            productos &&
            productos?.map((e, i) => {
              return (
                <div key={i}>
                  {e.error ? (
                    <h1 className="errors">¡ERROR!</h1>
                  ) : (
                      <Producto
                        _id={e._id}
                        precio={e.precio}
                        fecha_carga={e.fecha_carga}
                        categoria={e.categoria}
                      />
                  )}
                </div>
              );
            })
          ) : (
            <p className="nadamostrar">Nada que mostrar</p>
          )}
    </div>
    </div>
  );
}

export default TodosProductos;
