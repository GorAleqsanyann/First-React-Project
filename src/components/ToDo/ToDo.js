import "./ToDo.css";

export default function ToDo({ todo, removeTask }) {
  return (
    <div id="todo">
      <div>{todo.task}</div>
      <div onClick={() => removeTask(todo.id)}>X</div>
    </div>
  );
}
