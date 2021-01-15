import { Flex, Checkbox, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { MdCreate, MdDelete, MdDone, MdClose } from "react-icons/md";

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
        <Flex margin="10px">
          <Checkbox
          colorScheme="green"
            
            checked={status}
            onChange={handleCheck}
          />
          <h5>{title}</h5>
          <MdCreate size="25px" color="#6C6C6C" onClick={() => setEdit(true)} />
          <MdDelete
            size="25px"
            color="#6C6C6C"
            onClick={() => handleDelete(id, index)}
          />
        </Flex>
      )}

      {edit && (
        <Flex margin="10px">
          <Input
          color="Black"
            defaultValue={title}
            className="form-control form-control-lg"
            onChange={(e) => {
              setQueryTitle(e.target.value);
            }}
          />
        
            <MdDone
              size="25px"
              color="#6C6C6C"
              onClick={() =>
                handleUpdate(title, queryTitle, id, index, setEdit)
              }
            />
            <MdClose
              size="25px"
              color="#6C6C6C"
              onClick={() => setEdit(false)}
            />
         
        </Flex>
      )}
    </>
  );
};

export default TaskCard;

/* 
<input
type="checkbox"
checked={status}
onChange={handleCheck}
/>
 */