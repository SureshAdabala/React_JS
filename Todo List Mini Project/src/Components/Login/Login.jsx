import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

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
    <div className="login-page">

      <div className="login-clay-card">

        <div className="login-header">
          <div className="login-icon-wrapper">🔐</div>
          <h2>Sign In</h2>
          <p className="login-subtitle">Welcome back! Please login to continue</p>
        </div>

        <form onSubmit={onFormSubmit}>

          <div className="login-input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="login-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {err && <p className="login-error-msg">Invalid Credentials</p>}

          <button type="submit" className="login-submit-btn">
            Sign In
          </button>
        </form>

      </div>
    </div>
  );
}

export default Login;