import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

function NavBar() {

    const navigate = useNavigate()

    const styles = ({isActive}) => {
        return {
            color:isActive?"Red":"Blue"
        }
    }

    const onLogoutBtn = () => {
        localStorage.removeItem("Login_user")
        navigate("/login");
    }

  return (
    <nav className="nav-bar">
        <div className="nav-brand text-gradient">VICE.TODO</div>
        <div className="nav-menu">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Add Todos</NavLink>
            <NavLink to="/pending" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Pending</NavLink>
            <NavLink to="/completed" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>Completed</NavLink>
            <button className="btn btn-secondary" onClick={onLogoutBtn}>Logout</button>
        </div>
    </nav>
  )
}

export default NavBar