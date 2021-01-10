import React, { useState } from "react";
import NewTaskCard from "../components/Cards/NewTaskCard";
import TaskCard from "../components/Cards/TaskCard";
import SearchBar from "../components/SearchBar/SearchBar";
import Spinner from "../components/Spinner/Spinner";

const { NEXT_PUBLIC_API_URL } = process.env;

const index = ({ data }) => {
  const [tasks, setTasks] = useState(data);
  const [filtered, setFiltered] = useState(data);
  const [newTask, setNewTask] = useState(false);
  const [loading, setLoading] = useState(false);

  const perFiltered = (searchParam) => {
    let tasksFiltered = tasks;
    if (searchParam.length == 0) {
      setFiltered(tasks);
    } else {
      tasksFiltered = tasksFiltered.filter((e) =>
        e.title
          .toLowerCase()
          .replace(/ /g, "")
          .match(
            searchParam
              ? searchParam.toLowerCase().replace(/ /g, "").replace(/#/g, "")
              : ""
          )
      );
      setFiltered(tasksFiltered);
    }
  };

  const handleSummit = async (title) => {
    setLoading(true);
    try {
      const response = await fetch(`${NEXT_PUBLIC_API_URL}`, {
        method: "POST",
        body: JSON.stringify({
          title: title,
          status: false,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      let json = await response.json();
      let newData = tasks;

      await newData.push(json);

      setTasks(newData);
      setFiltered(newData);
      setNewTask(false);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleUpdate = async (title, newTitle, id, index, setEdit) => {
    if (newTitle !== title) {
      setLoading(true);
      try {
        id < 6 ? (id = id) : (id = 1);

        const response = await fetch(`${NEXT_PUBLIC_API_URL}/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            title: newTitle,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });

        const json = await response.json();
        let newArr = tasks;
        newArr[index] = json;

        setTasks(newArr);
        setFiltered(newArr);
        setLoading(false);
        setEdit(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    } else {
      console.log("no se ha hecho ninguna modificación");
    }
  };

  const handleDelete = async (id, index) => {
    setLoading(true);
    try {
      id < 6 ? (id = id) : (id = 1);

      await fetch(`${NEXT_PUBLIC_API_URL}/${id}`, {
        method: "DELETE",
      });

      let newArr = tasks;
      newArr.splice(index, 1);

      setTasks([...newArr]);
      setFiltered([...newArr]);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="card p-3">
      <h1 className="d-flex justify-content-center">Lista de Tareas</h1>
      <SearchBar perFiltered={perFiltered} />

      <div className="btn-group mb-3">
        <button className="btn btn-primary" onClick={() => setNewTask(true)}>
          Nueva tarea
        </button>

        <button className="btn btn-info" onClick={() => setFiltered(tasks)}>
          Todas
        </button>
        <button
          className="btn btn-warning"
          onClick={() => {
            const arr = tasks.filter((arr) => arr.status === false);
            setFiltered(arr);
          }}
        >
          Pendientes
        </button>

        <button
          className="btn btn-success"
          onClick={() => {
            const arr = tasks.filter((arr) => arr.status === true);
            setFiltered(arr);
          }}
        >
          Realizadas
        </button>
      </div>
      {newTask && (
        <NewTaskCard
          setNewTask={setNewTask}
          handleSummit={handleSummit}
          setNewTask={setNewTask}
        />
      )}

      {loading && <Spinner />}

      {filtered &&
        filtered.map((item, index) => (
          <TaskCard
            key={`${item}-${index}`}
            index={index}
            id={item.id}
            title={item.title}
            status={item.status}
            setFiltered={setFiltered}
            setTasks={setTasks}
            tasks={tasks}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(`${NEXT_PUBLIC_API_URL}`);
  const data = await res.json();

  if (!data) {
    console.log(data);
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: { data },
  };
}

export default index;
