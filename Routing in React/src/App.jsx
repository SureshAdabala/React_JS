import React from "react";
import Home from "./Components/Home";
import SinglePage from "./Components/SinglePage";
import About from "./Components/About";
import Contact from "./Components/Contact";
import NoPageFound from "./Components/NoPageFound";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>

    <Route path="/" element={<Home/>}/>
    <Route path="/products/:id" element={<SinglePage/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
    <Route path="*" element={<NoPageFound/>}/>

    </Routes>
    </BrowserRouter>
  )
}
export default App;