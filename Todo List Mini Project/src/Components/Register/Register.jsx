import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-page">

      <div className="register-clay-card">

        <div className="register-header">
          <div className="register-icon-wrapper">🌱</div>
          <h2>Create Account</h2>
          <p className="register-subtitle">Join us today — it's free!</p>
        </div>

        <form onSubmit={onFormSubmit}>

          <div className="register-input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="register-input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {err && <p className="register-error-msg">User Already Exists</p>}

          <button type="submit" className="register-submit-btn">
            Sign Up
          </button>
        </form>

      </div>
    </div>
  );
}

export default Register;