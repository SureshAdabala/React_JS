import React, { useState } from "react";
import "./Login.css";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const onFormSubmit = async (event) => {
    try {
      event.preventDefault();

      let res = await fetch(`http://localhost:3001/user?email=${email}`);
      let jsonRes = await res.json();

      if (jsonRes.length === 0) {
        setErr(true);
        return;
      } 
      else {
        if (password === jsonRes[0].password) {
          console.log("Login Successful");
          setErr(false);
        } 
        else {
          setErr(true);
        }
      }

    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="login-container">

      <form className="glass-card" onSubmit={onFormSubmit}>

        <h2>Sign In</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {err && <p className="error">Invalid Credentials</p>}

        <button type="submit">Sign In</button>

      </form>

    </div>
  );
}

export default Login;