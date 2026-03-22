import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate()

  const onFormSubmit = async (event) => {
    try {
      event.preventDefault();

      let res = await fetch(`http://localhost:3002/user?email=${email}`);
      let jsonRes = await res.json();

      if (jsonRes.length === 0) {
        setErr(true);
        return;
      } else {
        if (password === jsonRes[0].password) {
          localStorage.setItem("Login_user", jsonRes[0].id);
          alert("Login Successful");
          navigate("/")
          setErr(false);
        } else {
          setErr(true);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="glass-panel" style={{maxWidth: '450px'}}>
        <section style={{textAlign: 'center', marginBottom: '2rem'}}>
          <div style={{fontSize: '3rem', marginBottom: '1rem'}}>🔐</div>
          <h2 className="section-title" style={{marginBottom: '0.5rem'}}>Sign In</h2>
          <p className="subtitle">Welcome back! Please login to continue</p>
        </section>

        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="input-field"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="input-field"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {err && <p style={{color: '#ff5555', marginBottom: '1rem', textAlign: 'center', fontWeight: 'bold'}}>Invalid Credentials</p>}

          <button type="submit" className="btn btn-primary" style={{width: '100%', marginTop: '1rem'}}>Sign In</button>
        </form>
        <h3 style={{textAlign: 'center', marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-dim)', fontWeight: '400'}}>
          Don't have an Account? <Link to="/register" style={{color: 'var(--secondary)', fontWeight: '600'}}>Sign up</Link>
        </h3>
      </div>
    </div>
  );
}

export default Login;