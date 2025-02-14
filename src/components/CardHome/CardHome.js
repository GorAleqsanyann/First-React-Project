import { useState } from "react";

export default function CardHome({ image }) {
  const [show, setShow] = useState(false);

  return <img id="card" src={image} onClick={() => setShow()} />;
}

//
