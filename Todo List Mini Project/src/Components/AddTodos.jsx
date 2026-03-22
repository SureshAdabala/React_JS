import React, { useState } from "react";
import DisplayTodos from "./DisplayTodos";
import NavBar from "./NavBar";
import { Navigate } from "react-router-dom";

function AddTodo() {
  
  if(localStorage.getItem("Login_user")===null) {
    return <Navigate to="/login"/>
  }

  const [task, setTask] = useState("");

  const onHandleAddBtn = async () => {
    try {
      let date = new Date();
      let res = await fetch("http://localhost:3002/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          task,
          isCompleted: false,
          date: date.toLocaleString(),
          user_id: localStorage.getItem("Login_user")
        })
      });

      if (res.ok) {
        console.log("Task Added");
        setTask("");
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  return (

    <>
    <>
      <NavBar/>
      <div className="todo-header" style={{textAlign: 'center', marginBottom: '3rem'}}>
        <h1 className="hero-title text-gradient">My Todo List</h1>
        <p className="subtitle">Stay organised, one task at a time</p>
      </div>

      <div className="glass-panel" style={{marginBottom: '3rem'}}>
        <h2 className="section-title">Add New Task</h2>
        <div className="add-todo-form" style={{display: 'flex', gap: '1rem'}}>
          <input
            type="text"
            className="input-field"
            value={task}
            placeholder="What needs to be done?"
            onChange={(e) => setTask(e.target.value)} required
          />
          <button className="btn btn-primary" onClick={onHandleAddBtn}>
            Add Task
          </button>
        </div>
      </div>

      <DisplayTodos />
    </>

    </>
  );
}

export default AddTodo;