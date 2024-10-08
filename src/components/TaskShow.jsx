import { useState } from "react";
import "./TaskShow.css";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TaskContext from "../context/task";

function TaskShow({ task }) {
  const { updateTaskById, deleteTaskById } = useContext(TaskContext);

  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = () => {
    deleteTaskById(task.id);
  };
  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
    setShowEdit(false);
    updateTaskById(id, updatedTitle, updatedTaskDesc);
  };
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} editMode={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3>Göreviniz</h3>
          <p>{task.title}</p>
          <h3>Yapılacaklar</h3>
          <p>{task.taskDesc}</p>
          <div className="button-wrapper">
            <button
              className="button delete-button"
              onClick={handleDeleteClick}
            >
              Sil
            </button>
            <button className="button edit-button" onClick={handleEditClick}>
              Güncelle
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
