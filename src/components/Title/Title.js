import { useDispatch, useSelector } from "react-redux";
import { inputText } from "../../redux/about/action";
import "./Title.css";
import Button from "../Button/Button";

export default function Title() {
  const textWriting = useSelector((state) => {
    const { text } = state;
    return text.text;
  });

  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(inputText(e.target.value));
  }

  return (
    <div className="card-title">
      <p id="p">{textWriting}</p>
      <div className="card-title-top">
        <input className="inputtitle" onChange={handleChange} type="text" />
        <Button text="✍"></Button>
      </div>
    </div>
  );
}
