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

      const getUser = await fetch(`http://localhost:3001/user?email=${email}`);
      let jsonData = await getUser.json();

      if (jsonData.length > 0) {
        setErr(true);
        return;
      }

      setErr(false);

      let res = await fetch("http://localhost:3001/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      if (res.ok) {
        console.log("User Registered Successfully");
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register-container">

      <form className="glass-card" onSubmit={onFormSubmit}>

        <h2>Create Account</h2>

        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your name"
          onChange={(e) => setUsername(e.target.value)}
        />

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

        {err && <p className="error">User Already Exists</p>}

        <button type="submit">Sign Up</button>

      </form>

    </div>
  );
}

export default Register;