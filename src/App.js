import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./Card";

function App() {
  let [welcomeMessage, setWelcomeMessage] = useState("");
  let [theme, setTheme] = useState("day");

  useEffect(() => setWelcomeMessage("Happy 2021"), []);

  let changeTheme = () => {
    if (theme === "day") {
      setTheme("night");
    } else {
      setTheme("day");
    }
  };

  return (
    <div className={`App ${theme}`}>
      {welcomeMessage} <br />
      <Card cardTitle="Title 1" cardText="Text 1" />
      <Card cardTitle="Title 2" cardText="Text 2" />
      <Card cardTitle="Title 3" cardText="Text 3" />
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default App;
