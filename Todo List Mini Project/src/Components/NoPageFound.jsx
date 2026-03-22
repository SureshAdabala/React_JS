import React from 'react'
import NavBar from './NavBar'

function NoPageFound() {
  return (
    <div className="auth-page">
      <NavBar/>
      <div className="glass-panel" style={{textAlign: 'center', maxWidth: '500px'}}>
        <h1 className="hero-title text-gradient">404</h1>
        <h2 className="section-title">Page Not Found</h2>
        <p className="subtitle">The task you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-primary">Go Home</Link>
      </div>
    </div>
  )
}

export default NoPageFound