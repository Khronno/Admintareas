import { useState } from "react";
import createNotes from "./components/Notes";

function App() {
  const [currentTask, setCurrentTask] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    const newTask = document.querySelector("#taskIn").value;
    setCurrentTask(newTask);
  };

  return (
    <div>
      <h2>Agrega una Tarea</h2>
      <input type="text" id="taskIn" placeholder="comprar pan" />
      <button type="button" id="addB" onClick={handleAddTask}>
        Agregar
      </button>
      {currentTask !== task && (
        <div>
          {createNotes(currentTask)}
        </div>
      )}
    </div>
  );
}

export default App;