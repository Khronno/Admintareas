import uuid from 'uuid';

const Notes = ({ tareas }) => {
  const arrayId = tareas.map(() => uuid.v4()); // Generates unique IDs for each task

  const handleComplete = (id) => {
    let elemento = document.getElementById(id);
    elemento.classList.toggle("complete");
  };

  const handleEliminate = (id) => {
    let elemento = document.getElementById(id);
    elemento.classList.add("eliminate");
  };

  const components = tareas.map((content, index) => (
    <div key={index} id={arrayId[index]} className='task'>
      <h2>{content}</h2>
      <button type="button" onClick={() => handleComplete(arrayId[index])}>Completado</button>
      <button type="button" onClick={() => handleEliminate(arrayId[index])}>Eliminar</button>
    </div>
  ));

  return <div>{components}</div>;
};

export default Notes;