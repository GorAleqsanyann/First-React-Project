import { useState } from "react";

import "./ToDoForm.css";

export default function ToDoForm({ addTask }) {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  const handleKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSubmit(e);
    }
  };

  return (
    <form onSubmit={handleSubmit} id="toDoForm">
      <input
        value={userInput}
        type="text"
        onChange={handleChange}
        onKeyDown={handleKeyPress}
        placeholder="Grel zorutyun@..."
      />
      <button>Pahpanel</button>
    </form>
  );
}
