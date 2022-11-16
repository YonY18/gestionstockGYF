import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterByCategory } from "../../redux/actions";

function Navbar() {
  const categorias = useSelector((state) => state.categorias);
  const dispatch = useDispatch();
console.log(categorias)
  const handleCategorySelect = (e) => {
    e.preventDefault();
    dispatch(filterByCategory(e.target.value));
  };

  return (
    <>
      <div>Navbar</div>
      <div>
        <input name="precio" id="precio"></input>
        <select
        defaultValue='Todas Las Categorias'
        onChange={handleCategorySelect}>
          <option className="options" disabled></option>
          <option value={"All"}>Todas las categorías</option>
          <option value={"PRODUNO"}>PRODUNO</option>
          <option value={"PRODDOS"}>PRODDOS</option>
        </select>
      </div>
    </>
  );
}

export default Navbar;
