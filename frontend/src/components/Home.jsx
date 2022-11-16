import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterPresu, getAllCategorias, getAllProductos } from "../../redux/actions";
import Navbar from "./Navbar";
import TodosProductos from "./TodosProductos";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProductos());
    dispatch(getAllCategorias());
    dispatch(filterPresu())
  }, []);

  return (
    <div >
      <Navbar/>
      <TodosProductos/>
    </div>
  );
}
