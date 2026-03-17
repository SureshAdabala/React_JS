import React, { useEffect, useState } from "react";
import "./DisplayTodos.css";

function DisplayTodos() {

  const [tasks, setTasks] = useState([]);

  const OnMarkedBtn = async (id) => {
    try {
      let res2 = await fetch(`http://localhost:3002/todos/${id}`);
      let todo = await res2.json();

      let res3 = await fetch(`http://localhost:3002/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isCompleted: todo.isCompleted ? false : true
        })
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  const OnDeleteBtn = async (id) => {
    try {
      let res1 = await fetch(`http://localhost:3002/todos/${id}`, {
        method: "DELETE"
      });
      let jsonRes1 = await res1.json();
      if (!jsonRes1.ok) {
        console.log("Todo Deleted Succesfully")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {

    async function getAllTodos() {

      try {
        let user_id = localStorage.getItem("login_user");
        let res = await fetch(`http://localhost:3002/todos?user_id=${localStorage.getItem("Login_user")}`);
        let jsonRes = await res.json();
        setTasks(jsonRes);
      } catch (error) {
        console.log(error.message);
      }
    }
    getAllTodos();
  }, [tasks]);

  return (

    <div className="todo-container">

      <h2>All Todos</h2>

      {tasks.length === 0 && (
        <div className="todo-empty">
          <span>📝</span>
          No tasks yet — add one above!
        </div>
      )}

      {tasks.map((item) => (

        <div className={`todo-card${item.isCompleted ? " completed" : ""}`} key={item.id}>

          <p className="todo-task-text">{item.task}</p>

          <div className="todo-buttons">

            <button className="todo-delete-btn" onClick={() => OnDeleteBtn(item.id)}>Delete</button>

            <button className="todo-mark-btn" onClick={() => OnMarkedBtn(item.id)}>
              {item.isCompleted
                ? "Completed"
                : "Mark as Completed"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DisplayTodos;