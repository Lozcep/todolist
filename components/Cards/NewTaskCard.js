import React, { useState } from "react";
import { Button } from "@chakra-ui/react"

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
        <Button  onClick={handleClick}>
          Agregar tarea
        </Button>
        <Button onClick={() => setNewTask(false)}>
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default NewTaskCard;
