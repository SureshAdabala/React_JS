import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { Navigate } from 'react-router-dom';

function CompletedTodos() {
    if(localStorage.getItem("Login_user")===null) {
    return <Navigate to="/login"/>
  }

  const[completedTodo,setCompletedTodos] = useState([]);

  useEffect(()=>{
    async function getAllCompletedTodos() {
        try {
            let user_id = localStorage.getItem("Login_user");
            let res = await fetch(`http://localhost:3002/todos?user_id=${user_id}&isCompleted=true`);
            let jsonRes = await res.json();
            setCompletedTodos(jsonRes);
        } catch (error) {
            console.log(error)
        }
    }
    getAllCompletedTodos();
  },[])

  return (
    <div className="todo-container">
    <NavBar/>
    <h1 className="hero-title text-gradient" style={{marginTop: '2rem', textAlign: 'center'}}>Completed Tasks</h1>
    
    <div className="todo-grid" style={{marginTop: '2rem'}}>
        {
            completedTodo.length==0?(
                <div className="glass-panel empty-state">
                    <span className="empty-icon">📋</span>
                    <p>No completed tasks yet. Time to get to work!</p>
                </div>
            ):(
                completedTodo.map(item=>(
                    <div key={item.id} className="todo-card">
                        <div className="todo-info">
                            <div className="status-dot status-completed"></div>
                            <h1 className="todo-text" style={{textDecoration: 'line-through', color: 'var(--text-dim)'}}>{item.task}</h1>
                        </div>
                    </div>
                ))
            )
        }
    </div>
    </div>
  )
}

export default CompletedTodos