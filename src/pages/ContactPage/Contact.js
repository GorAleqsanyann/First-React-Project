import { useState } from "react";
import ToDoForm from "../../components/ToDoForm/ToDoForm";
import ToDo from "../../components/ToDo/ToDo";

export default function Contact() {
  const [toDos, setToDos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
      };
      setToDos([...toDos, newItem]);
    }
  };
  console.log(toDos);

  const removeTask = (id) => {
    setToDos([...toDos.filter((a) => a.id !== id)]);
  };
  return (
    <div>
      <h1>Cank: {toDos.length}</h1>
      <ToDoForm addTask={addTask} />
      {toDos.length > 0 &&
        toDos.map((e) => {
          return <ToDo key={e.id} todo={e} removeTask={removeTask} />;
        })}
    </div>
  );
}
