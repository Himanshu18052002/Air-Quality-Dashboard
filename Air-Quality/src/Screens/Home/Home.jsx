import React, { useEffect, useState } from "react";
import { db, auth } from "../../Components/Firebase";
import { doc, getDoc } from "firebase/firestore";
import WorldMap from "../../Components/WorldMap";
import WeatherCard from "../../Components/WeatherCard";
import { useSelector } from "react-redux";

// Debounce function definition
const debounce = (func, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
};

function Home() {
  const coordinates = useSelector((state) => state.Coordinates);
  const [user, setUser] = useState("");
  const [city, setCity] = useState("");

  // Fetch user data from Firebase
  const getUser = async () => {
    try {
      auth.onAuthStateChanged(async (user) => {
        const docref = doc(db, "User", user.uid);
        const docSnap = await getDoc(docref);
        if (docSnap.exists()) {
          setUser(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No user data found.");
        }
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Weather and Air Quality Dashboard</h1>
        <input
          style={{
            width: "25vw",
            height: "90px",
            padding: "0 10px",
            fontSize: "18px",
            color: "#0047b5",
            border: "1px solid #008693",
            borderRadius: "10px",
            boxShadow: "10px 10px 26px #3b3b3b",
          }}
          type="text"
          onChange={debounce((e) => setCity(e.target.value), 1500)}
          placeholder="Enter city name"
        />
        {city && (
          <>
            <WeatherCard city={city} />
            <WorldMap lat={coordinates.lat.lat} lon={coordinates.lon.lon} />
          </>
        )}
      </div>
    </>
  );
}

export default Home;
