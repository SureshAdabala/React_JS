import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <h2 className="section-title">All Todos</h2>

      {tasks.length === 0 ? (
        <div className="glass-panel empty-state">
          <span className="empty-icon">📝</span>
          <p>No tasks yet — add one above!</p>
        </div>
      ) : (
        <div className="todo-grid">
          {tasks.map((item) => (
            <div key={item.id} className="todo-card">
              <div className="todo-info">
                <div className={`status-dot ${item.isCompleted ? 'status-completed' : 'status-pending'}`}></div>
                <Link to={`/todo/${item.id}`}>
                  <p className="todo-text" style={{textDecoration: item.isCompleted ? 'line-through' : 'none', color: item.isCompleted ? 'var(--text-dim)' : 'white'}}>
                    {item.task}
                  </p>
                </Link>
              </div>
              <div className="todo-actions">
                <button className={`btn ${item.isCompleted ? 'btn-secondary' : 'btn-primary'}`} style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}} onClick={() => OnMarkedBtn(item.id)}>
                  {item.isCompleted ? "Undo" : "Complete"}
                </button>
                <button className="btn btn-danger" style={{padding: '0.4rem 0.8rem', fontSize: '0.85rem'}} onClick={() => OnDeleteBtn(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default DisplayTodos;