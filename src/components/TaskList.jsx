import TaskShow from "./TaskShow";
import "./TaskList.css";
function TaskList({ taskArray }) {
  return (
    <div className="task-list">
      {taskArray.map((task) => {
        return <TaskShow key={task.id} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
