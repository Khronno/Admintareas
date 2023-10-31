import React from 'react';
import uuid from 'uuid'; // Importa una librería para generar IDs únicos

const Notes = ({ tareas }) => {
  const arrayId = tareas.map(() => uuid.v4()); // Genera IDs únicos para cada tarea

  const handleComplete = (id) => {
    let elemento = document.getElementById(id);
    if (elemento.className === "complete") {
      elemento.className = "";
    } else {
      elemento.className += "complete"; 
    }
  }
  const handleEliminate = (id) => {
    let elemento = document.getElementById(id);
    elemento.className += "eliminate"
  }

  const components = tareas.map((content, index) => (
    <div key={index} id={arrayId[index]}>
      <h2>{content}</h2>
      <button type="button" onClick={() => handleComplete(arrayId[index])}>Completado</button>
      <button type="button" onClick={() => handleEliminate(arrayId[index])}>Eliminar</button>
    </div>
  ));

  return <div>{components}</div>;
};

export default Notes;