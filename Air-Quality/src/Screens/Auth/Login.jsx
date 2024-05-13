import React, { useState } from "react";
import classes from "./Styles.module.css";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../Components/Firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("User logged in succeesfully");
      navigate("/home");
    } catch (error) {
      console.log("Error occured in the login Component ", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleLogin} className={classes.container}>
        <div className={classes.authContainer}>
          <h1>Check your area weather</h1>

          <div className={classes.textInputContainer}>
            <label>Enter your email below:</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
          </div>
          <div className={classes.textInputContainer}>
            <label>Enter your password below:</label>
            <br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password here"
            />
          </div>
          <div className={classes.buttonContainer}>
            <button type="submit">Login</button>
            <p
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/register")}
            >
              Don't have an account? Sign up
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Login;
