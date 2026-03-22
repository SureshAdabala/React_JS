import React, { useEffect, useState } from 'react'
import NavBar from './NavBar';
import { Navigate } from 'react-router-dom';

function PendingTodos() {

    if(localStorage.getItem("Login_user")==null) {
    return <Navigate to="/login"/>
  }

    const [pendingTodos, setPendingTodos] = useState([]);

    useEffect(() => {
        async function getPendingTodos() {
            try {
                let user_id = localStorage.getItem("Login_user");
                let res = await fetch(`http://localhost:3002/todos?user_id=${user_id}&isCompleted=false`);
                let jsonRes = await res.json();
                setPendingTodos(jsonRes);
            } catch (error) {
                console.log(error)
            }
        }
        getPendingTodos();
    },[])

    return (
        <div className="todo-container">
            <NavBar/>
            <h1 className="hero-title text-gradient" style={{marginTop: '2rem', textAlign: 'center'}}>Pending Tasks</h1>
            <p className="subtitle" style={{textAlign: 'center', marginBottom: '2rem'}}>
               "Don't stop until you're proud." 🚀
            </p>
            
            <div className="todo-grid" style={{marginTop: '2rem'}}>
                {
                    pendingTodos.length==0?(
                        <div className="glass-panel empty-state">
                            <span className="empty-icon">🎉</span>
                            <p>No pending tasks — you're all caught up!</p>
                        </div>
                    ):(
                        pendingTodos.map(item=>(
                            <div key={item.id} className="todo-card">
                                <div className="todo-info">
                                    <div className="status-dot status-pending"></div>
                                    <h1 className="todo-text">"{item.task}"</h1>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>   
        </div>
    )
}

export default PendingTodos