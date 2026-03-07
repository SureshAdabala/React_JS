import React from 'react'
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
    const styles=({isActive})=>{
        return{
            width: "120px",
            margin: "10px",
            color:isActive?"red":"blue",
            backgroundColor: isActive?"cyan":"yellow"
        }
    }
  return (
    <nav>
        <NavLink to="/" style={styles}>Home</NavLink>
        <NavLink to="/About" style={styles}>About</NavLink>
        <NavLink to="/Contact" style={styles}>Contact</NavLink>
    </nav>
  )
}

export default Navbar;