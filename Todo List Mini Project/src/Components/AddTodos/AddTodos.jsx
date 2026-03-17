import React, { useState } from "react";
import DisplayTodos from "../DisplayTodos/DisplayTodos";
import "./AddTodos.css";

function AddTodo() {

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

    <div className="addtodo-page">

      <div className="addtodo-page-title">
        <h1>My Todo List</h1>
        <p>Stay organised, one task at a time</p>
      </div>

      <div className="addtodo-container">

        <div className="addtodo-card">

          <h2>Add Todo</h2>

          <div className="addtodo-input-row">
            <input
              type="text"
              value={task}
              placeholder="Enter your task..."
              onChange={(e) => setTask(e.target.value)} required
            />

            <button className="addtodo-btn" onClick={onHandleAddBtn}>
              Add Task
            </button>
          </div>

        </div>

        <DisplayTodos />

      </div>
    </div>
  );
}

export default AddTodo;