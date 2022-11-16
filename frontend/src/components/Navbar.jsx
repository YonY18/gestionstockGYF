import React from "react";
import { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory, filterPresu } from "../../redux/actions";

export default function Navbar() {

  const categorias = useSelector((state) => state.categorias);
  const dispatch = useDispatch();
  const [input , setInput] = useState('')
  const [errors, setErrors] = useState({})
  const re = /^[0-9a-zA-ZÁ-ÿ.:-\s]{0,7}$/;


  const handleCategorySelect = (e) => {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));
  };
 
  const handleInputChange = (e) => {
    setInput(e.target.value)
    if(!re.exec(e.target.value)){
      e.target.value > 1000000 ? setErrors({
        name: "Monto Invalido"
      })
      :  setErrors({
        name: "carácter invalido"
      })
    }else {
      setErrors({
        name: ""
      })
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if(input === ""){
      setErrors({
        name: "este campo es obligatorio"
      })
    }else {
      dispatch(filterPresu(input))
      setInput("")
    }
  }

  return (
    <div className="nav">
      <button>Crear</button>
      <div>
      <form onSubmit={handleSubmit} >
      <div>
      <input className="input" 
        name="presupuesto"
        type="number"
        placeholder = "Presupuesto"
        value={input}
        onChange = {handleInputChange}
        />
        {errors.name && (
        <div className="errors">
        <p>{errors.name}</p>
        </div>
       )}
        <button className="button" type='submit'>Buscar</button>
        </div>
      </form>


        <select
          defaultValue='Todas Las Categorias'
          onChange={handleCategorySelect}>
          <option className="options" disabled></option>
          <option value={"All"}>Todas las categorías</option>
          <option value={"PRODUNO"}>PRODUNO</option>
          <option value={"PRODDOS"}>PRODDOS</option>
        </select>
      </div>
    </div>
  );
}

