import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./Screens/Auth/Login";
import Register from "./Screens/Auth/Register";
import Home from "./Screens/Home/Home";
import { useEffect, useState } from "react";
import { auth } from "./Components/Firebase";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
