import React, { useState } from "react";
import classes from "./Styles.module.css";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../Components/Firebase";
import { setDoc, doc } from "firebase/firestore";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      if (user) {
        await setDoc(doc(db, "User", user.uid), {
          email: user.email,
          name: name,
        });
      }
      alert("User registered succesfully");
    } catch (error) {
      console.log("error occured in the component section", error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleRegistration} className={classes.container}>
        <div className={classes.authContainer}>
          <h1>Lets get started</h1>
          <div className={classes.textInputContainer}>
            <label>Enter your full name: </label>
            <br />
            <input
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
            />
          </div>
          <div className={classes.textInputContainer}>
            <label>Enter your email below:</label>
            <br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
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
            <button type="submit">Register me</button>
            <p style={{ cursor: "pointer" }} onClick={() => navigate("/login")}>
              Already a user? Login here
            </p>
          </div>
        </div>
      </form>
    </>
  );
}

export default Register;
