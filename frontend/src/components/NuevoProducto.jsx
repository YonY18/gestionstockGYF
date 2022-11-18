import React from "react";
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useDispatch } from "react-redux";
import { createProducto } from "../../redux/actions";

export default function NuevoProducto() {

    const dispatch = useDispatch();
    const [errors, setErrors] = useState({})
    const [input, setInput] = useState({
        precio: "",
        categoria: "",
      });

      const handleChange = (e) => {
        setInput({
          ...input,
          precio: e.target.value
        });
      }
      const handleSelect = (e) => {
        setInput({
          ...input,
          categoria: e.target.value
        })
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.precio.trim()) {
            return alert("Necesita introducir un Precio")
          }else if (input.categoria === "") {
            return alert("Seleccione uno categoria")
          }else {
          dispatch(createProducto(input))
          setInput({
            precio: "",
            categoria: "",
          })
          window.location.reload()}
          
      }
       
  return (
    <div>
    <div className="nav">
    <Link to="/">
        <label className="botonlabel">Home</label>
      </Link>
      <h3>Crear Producto</h3>
    </div>
    <div className="formcreacion">
      <form onSubmit={handleSubmit}>
        <label>Precio</label>
        <input 
        className="input" 
        type="number"
        value={input.precio}
        name="precio"
        onChange={handleChange}
        />
        <label>Categoria</label>
        <select
            defaultValue="categoria"
            onChange={handleSelect}
            >
          <option className="options" defaultValue={""}>Categorias</option>
          <option value={"PRODUNO"}>PRODUNO</option>
          <option value={"PRODDOS"}>PRODDOS</option>
        </select>
        {errors.name && (
        <div>
        <p className="errors">{errors.name}</p>
        </div>
       )}
        <label>Fecha de creacion sera colocada automaticamente</label>
        <button
        type="submit"
        >Crear</button>
      </form>
      </div>
    </div>
  );
}
