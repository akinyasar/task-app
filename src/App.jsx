import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useState } from "react";

function App() {
  const [taskArray, setTaskArray] = useState([]);
  const createTask = (title, taskDesc) => {
    setTaskArray([
      {
        id: Math.round(Math.random() * 999999),
        title,
        taskDesc,
      },
      ...taskArray,
    ]);
  };
  const deleteTaskById = (id) => {
    const deletedTaskArray = taskArray.filter((task) => {
      return task.id !== id;
    });
    setTaskArray(deletedTaskArray);
  };
  const updateTaskById = (id, updatedTitle, updatedTaskDesc) => {
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
