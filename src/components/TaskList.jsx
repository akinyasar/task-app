import TaskShow from "./TaskShow";
import "./TaskList.css";
function TaskList({ taskArray, onDelete, onUpdate }) {
  return (
    <div className="task-list">
      {taskArray.map((task) => {
        return (
          <TaskShow
            key={task.id}
            task={task}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
