import React from "react";
import neon from "./images/Neon.jpg";

import "./style.css";
import Title from "../../components/Title/Title";

export default function About() {
  return (
    <div className="about">
      <div className="wrap">
        <div className="card">
          <div className="card-image">
            <img src={neon} alt="neon" />
            <Title />
          </div>
        </div>
      </div>
    </div>
  );
}
