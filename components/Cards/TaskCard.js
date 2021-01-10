import React, { useState } from "react";

const TaskCard = (props) => {
  const {
    title,
    id,
    handleUpdate,
    handleDelete,
    index,
    status,
    setTasks,
    setFiltered,
  } = props;

  const [queryTitle, setQueryTitle] = useState(title);
  const [edit, setEdit] = useState(false);

  const newArr = (state, index, status) => {
    let arr = state;
    arr[index].status = !status;
    return [...arr];
  };

  const handleCheck = () => {
    setFiltered((filtered) => newArr(filtered, index, status));
    setTasks((tasks) => newArr(tasks, index, status));
  };

  return (
    <>
      {!edit && (
        <div className="card mb-4 p-3">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">{title}</h5>
            <input
              className="form-check-input"
              type="checkbox"
              checked={status}
              onChange={handleCheck}
            />
          </div>
          <div className="task-card-button">
            <button className="btn btn-primary" onClick={() => setEdit(true)}>
              Editar
            </button>

            <button
              className="btn btn-danger"
              onClick={() => handleDelete(id, index)}
            >
              Eliminar
            </button>
          </div>
        </div>
      )}

      {edit && (
        <div className="card mb-3 p-3">
          <input
            defaultValue={title}
            className="form-control form-control-lg"
            onChange={(e) => {
              setQueryTitle(e.target.value);
            }}
          />
          <div className="task-card-button">
            <button
              className="btn btn-primary"
              onClick={() =>
                handleUpdate(title, queryTitle, id, index, setEdit)
              }
            >
              Actualizar
            </button>
            <button className="btn btn-danger" onClick={() => setEdit(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default TaskCard;
