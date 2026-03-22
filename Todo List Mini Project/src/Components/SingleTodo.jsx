import React, { useEffect, useState } from 'react'
import NavBar from "./NavBar";
import { useParams } from 'react-router-dom';

function SingleTodo() {
    const{id} = useParams()

    const[data,setData] = useState({});
    useEffect(()=>{
        async function getSingleTodo( ){
            try {
               let res = await fetch(`http://localhost:3002/todos/${id}`);
               let jsonRes = await res.json();
               setData(jsonRes);
            } catch (error) {
                console.log(error);
            }
        }
        getSingleTodo();
    },[data])

    const onUpdateBtn = async (id)=>{
        try {
            let getData = await fetch(`http://localhost:3002/todos/${id}`);
            let jsonRes = await getData.json();

            let res = await fetch(`http://localhost:3002/todos/${id}`,{
                method:"PATCH",
                headers:{
                    'Content-Type' : 'application/json'
                },
                body : JSON.stringify({
                    ...jsonRes,isCompleted:!jsonRes.isCompleted
                })
            })
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="todo-detail-page">
        <NavBar/>
        <div className="glass-panel" style={{marginTop: '3rem'}}>
            <div className="quote-box" style={{fontStyle: 'italic', color: 'var(--secondary)', marginBottom: '1.5rem', opacity: '0.8', borderLeft: '3px solid var(--secondary)', paddingLeft: '1rem'}}>
              "The secret of getting ahead is getting started." — Mark Twain
            </div>
            <h1 className="hero-title text-gradient" style={{fontSize: '2.5rem'}}>"{data.task}"</h1>
            <div style={{display: 'flex', alignItems: 'center', gap: '1rem', margin: '1.5rem 0'}}>
              <div className={`status-dot ${data.isCompleted ? 'status-completed' : 'status-pending'}`}></div>
              <span style={{fontWeight: '600', color: data.isCompleted ? '#00ff88' : '#ffcc00'}}>
                {data.isCompleted ? "Completed" : "Pending Action"}
              </span>
            </div>
            <p className="subtitle" style={{marginBottom: '2rem'}}>Added on: {data.date}</p>
            <div style={{display: 'flex', gap: '1rem'}}>
              <button 
                className={`btn ${data.isCompleted ? 'btn-secondary' : 'btn-primary'}`} 
                onClick={()=>onUpdateBtn(data.id)}
              >
                {data.isCompleted ? "Undo Completion" : "Mark as Complete"}
              </button>
            </div>
        </div>
    </div>
  )
}

export default SingleTodo