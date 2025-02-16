import CardHome from "../../components/CardHome/CardHome";

import img1 from "./images/ron1.jpg";
import img2 from "./images/pele1.jpg";
import img3 from "./images/messi1.jpg";

import "./Home.css";

export default function Home() {
  const images = [
    {
      id: 1,
      image: img1,
      text: "haytni xaxacox Ronaldo",
      wiki: "https://en.wikipedia.org/wiki/Cristiano_Ronaldo",
    },
    {
      id: 2,
      image: img2,
      text: "haytni xaxacox Pele",
      wiki: "https://ru.wikipedia.org/wiki/Пеле",
    },
    {
      id: 3,
      image: img3,
      text: "haytni xaxacox Messi",
      wiki: "https://en.wikipedia.org/wiki/Lionel_Messi",
    },
  ];
  return (
    <div id="home">
      {images.map((e) => (
        <div key={e.id}>
          <CardHome image={e.image} text={e.text} wiki={e.wiki} />
        </div>
      ))}
    </div>
  );
}
