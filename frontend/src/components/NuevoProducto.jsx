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
          }else if (input.rating === "" || input.rating < 1 || input.rating > 7) {
            return alert("Precio debe estar entre 1 y 7")
          }else if (input.categoria === "") {
            return alert("Seleccione uno categoria")
          }else {
          dispatch(createProducto(input))
          setInput({
            precio: "",
            categoria: "",
          })}
          
      }
       
  return (
    <div>
      <div>Crear Producto</div>
      <Link to="/">
        <button>Home</button>
      </Link>
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
          <option className="options" disabled></option>
          <option value={"PRODUNO"}>PRODUNO</option>
          <option value={"PRODDOS"}>PRODDOS</option>
        </select>
        {errors.name && (
        <div className="errors">
        <p>{errors.name}</p>
        </div>
       )}
        <label>Fecha de creacion sera colocada automaticamente</label>
        <button
        type="submit"
        >Crear</button>
      </form>
    </div>
  );
}
