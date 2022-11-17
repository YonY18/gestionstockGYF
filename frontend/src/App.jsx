import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Home from "../src/components/Home"
import NuevoProducto from "./components/NuevoProducto"

export default function App(){
  return (
    <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/crear" element={<NuevoProducto/>}/>
    </Routes>



  )
}


