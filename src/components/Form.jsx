import { useState } from "react";
import Notes from "./Notes";

export default function Form() {
  const [task, setTask] = useState("");
  const [allTasks, setAllTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== "") {
      const updatedTasks = [...allTasks, [task]]; // Creating a new list with the new task
      setAllTasks(updatedTasks);
      setTask(""); // Reset the task input
    }
  };

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  return (
    <>
      <h2>Agrega una Tarea</h2>
      <input
        type="text"
        placeholder="Escribe tu tarea aquí"
        id="input"
        value={task}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleAddTask}>
        Agregar
      </button>
      <div>
        {allTasks.map((tasks, index) => (
          <Notes key={index} tareas={tasks} />
        ))}
      </div>
    </>
  );
}
