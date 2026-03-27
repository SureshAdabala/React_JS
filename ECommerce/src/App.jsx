import React from 'react'
import Products from './Components/Products'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SingleProduct from './Components/SingleProduct'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Products/>}/>
      <Route path='/products/:id' element={<SingleProduct/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App