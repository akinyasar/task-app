import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const createTask = async (title, taskDesc) => {
    const res = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    setTaskArray([res.data, ...taskArray]);
  };

  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:3000/tasks");
    setTaskArray(res.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  const deleteTaskById = async (id) => {
    await axios.delete(`http://localhost:3000/tasks/${id}`);
    const deletedTaskArray = taskArray.filter((task) => {
      return task.id !== id;
    });
    setTaskArray(deletedTaskArray);
  };
  const updateTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    await axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTaskArray = taskArray.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTaskArray(updatedTaskArray);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        taskArray={taskArray}
        onDelete={deleteTaskById}
        onUpdate={updateTaskById}
      />
    </div>
  );
}

export default App;
