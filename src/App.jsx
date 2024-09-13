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
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList taskArray={taskArray} />
    </div>
  );
}

export default App;
