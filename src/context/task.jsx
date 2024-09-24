import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TaskContext = createContext();

function Provider({ children }) {
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
  const sharedValuesAndMethods = {
    taskArray,
    createTask,
    fetchTasks,
    updateTaskById,
    deleteTaskById,
  };
  return (
    <TaskContext.Provider value={sharedValuesAndMethods}>
      {children}
    </TaskContext.Provider>
  );
}
export { Provider };
export default TaskContext;
