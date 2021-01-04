import React from "react";
import "./styles.css";

export default function Card({ cardTitle, cardText }) {
  return (
    <div>
      <img></img>
      <h2>{cardTitle}</h2>
      <p>{cardText}</p>
      <button>Take Me</button>
    </div>
  );
}
