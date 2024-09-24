import TaskShow from "./TaskShow";
import "./TaskList.css";
import { useContext } from "react";
import TaskContext from "../context/task";

function TaskList() {
  const { taskArray } = useContext(TaskContext);
  return (
    <div className="task-list">
      {taskArray.map((task) => {
        return <TaskShow key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
