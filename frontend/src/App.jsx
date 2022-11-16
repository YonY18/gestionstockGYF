import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom"

import Home from "../src/components/Home"

export default function App(){
  return (
    <Routes>
          <Route path="/" element={<Home />}/>
    </Routes>



  )
}


