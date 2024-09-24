import { useState } from "react";
import "./TaskCreate.css";
import { useContext } from "react";
import TaskContext from "../context/task";

function TaskCreate({ task, editMode, onUpdate }) {
  const { createTask } = useContext(TaskContext);
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editMode) {
      onUpdate(task.id, title, taskDesc);
    } else {
      createTask(title, taskDesc);
    }
    clearForm();
  };
  const clearForm = () => {
    setTitle("");
    setTaskDesc("");
  };
  return (
    <div>
      {editMode ? (
        <div className="task-edit">
          <h3>Başlığı Düzenleyiniz!</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label">Başlık</label>
            <input
              className="form-input"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              type="text"
            />
            <label className="form-label">Taskı Düzenleyiniz!</label>
            <textarea
              className="form-input"
              value={taskDesc}
              onChange={(event) => {
                setTaskDesc(event.target.value);
              }}
              rows={5}
            />
            <button className="form-button update-button">Düzenle</button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Lütfen Task Ekleyiniz!</h3>
          <form className="form" onSubmit={handleSubmit}>
            <label className="form-label">Başlık</label>
            <input
              className="form-input"
              value={title}
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              type="text"
            />
            <label className="form-label">Task Giriniz!</label>
            <textarea
              className="form-input"
              value={taskDesc}
              onChange={(event) => {
                setTaskDesc(event.target.value);
              }}
              rows={5}
            />
            <button className="form-button">Oluştur</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
