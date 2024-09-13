import { useState } from "react";
import "./TaskCreate.css";
function TaskCreate({ onCreate }) {
  const [title, setTitle] = useState("");
  const [taskDesc, setTaskDesc] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title, taskDesc);
    clearForm();
  };
  const clearForm = () => {
    setTitle("");
    setTaskDesc("");
  };
  return (
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
  );
}

export default TaskCreate;
