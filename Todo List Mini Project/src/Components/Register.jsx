import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate()

  const onFormSubmit = async (event) => {
    try {
      event.preventDefault();

      const userDetails = { username, email, password };

      const getUser = await fetch(`http://localhost:3002/user?email=${email}`);
      let jsonData = await getUser.json();

      if (jsonData.length > 0) {
        setErr(true);
        alert("User Already Registered! Please Login");
        return;
      }

      setErr(false);

      let res = await fetch("http://localhost:3002/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (res.ok) {
        alert("User Registered Successfully");
        setUsername("");
        setEmail("");
        setPassword("");
        navigate("/login")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth-page">
      <div className="glass-panel" style={{ maxWidth: '450px' }}>
        <section style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🌱</div>
          <h2 className="section-title" style={{ marginBottom: '0.5rem' }}>Create Account</h2>
          <p className="subtitle">Join us today — it's free!</p>
        </section>

        <form onSubmit={onFormSubmit}>
          <div className="form-group">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="input-field"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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

          {err && <p style={{ color: '#ff5555', marginBottom: '1rem', textAlign: 'center', fontWeight: 'bold' }}>User Already Exists</p>}

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>Sign Up</button>
        </form>
        <h3 style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '1rem', color: 'var(--text-dim)', fontWeight: '400' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--secondary)', fontWeight: '600' }}>Login</Link>
        </h3>
      </div>
    </div>
  );
}

export default Register;