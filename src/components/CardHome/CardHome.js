import { useState } from "react";

import "./CardHome.css";

export default function CardHome({ image, text, wiki }) {
  const [show, setShow] = useState(false);

  return (
    <div id="cardHome">
      <img id="card" src={image} onClick={() => setShow((e) => !e)} />
      {show && (
        <label>
          <a href={wiki}>{text}</a>
        </label>
      )}
    </div>
  );
}

//
