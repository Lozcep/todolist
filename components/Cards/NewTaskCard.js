import React, { useState } from "react";

const NewTaskCard = (props) => {
  const { handleSummit, setNewTask } = props;

  const [queryTitle, setQueryTitle] = useState("");

  const handleClick = () => handleSummit(queryTitle);

  return (
    <div className="card mb-3 p-3">
      <input
        className="form-control form-control-lg mb-3"
        placeholder="Tarea"
        onChange={(e) => setQueryTitle(e.target.value)}
      />

      <div className="task-card-button">
        <button className="btn btn-primary" onClick={handleClick}>
          Agregar tarea
        </button>
        <button className="btn btn-danger" onClick={() => setNewTask(false)}>
          Cancelar
        </button>
      </div>
    </div>
  );
};

export default NewTaskCard;
