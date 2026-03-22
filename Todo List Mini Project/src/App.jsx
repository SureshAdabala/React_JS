import React from 'react'
import './App.css'
import Register from './Components/Register'
import Login from './Components/Login'
import AddTodos from './Components/AddTodos'
import PendingTodos from './Components/PendingTodos'
import CompletedTodos from './Components/CompletedTodos'
import { NavLink, Route, Routes } from 'react-router-dom'
import NoPageFound from './Components/NoPageFound'
import NavBar from './Components/NavBar'
import SingleTodo from './Components/SingleTodo'

function App() {
  return (
    <>
    <div className='app-container'>
      <Routes>
        <Route path='/' element={<AddTodos/>}></Route>
        <Route path='/todo/:id' element={<SingleTodo/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/pending' element={<PendingTodos/>}></Route>
        <Route path='/completed' element={<CompletedTodos/>}></Route>
        <Route path='*' element={<NoPageFound/>}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App