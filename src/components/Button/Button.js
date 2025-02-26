import "./Button.css";

export default function Button({ onClick, text, classname = "button" }) {
  return (
    <button onClick={onClick} classname={classname}>
      {text}
    </button>
  );
}
