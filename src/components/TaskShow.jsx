import "./TaskShow.css";
function TaskShow({ task }) {
  return (
    <div className="task-show">
      <h3>Göreviniz</h3>
      <p>{task.title}</p>
      <h3>Yapılacaklar</h3>
      <p>{task.taskDesc}</p>
      <div className="button-wrapper">
        <button className="button delete-button">Sil</button>
        <button className="button edit-button">Güncelle</button>
      </div>
    </div>
  );
}

export default TaskShow;
