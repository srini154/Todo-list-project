import React, { useState } from "react";
import "./Main.css";

function Main() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task === "") {
      alert("Enter your task");
    } else {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="main-div">
      <h1 className="h1-tag">To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add your Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input-tag"
        />
        <button className="btn-add" onClick={handleSubmit}>
          ADD
        </button>
      </div>
      <div className="list">
        <ul className="ul-item">
          {tasks.map((task, index) => (
            <li key={index} className="li-item">
              <input
                type="checkbox"
                className="check"
                checked={task.completed}
                onChange={() => handleCheckboxChange(index)}
              />
              <span className={task.completed ? "completed" : ""}>
                {task.text}
              </span>
              <button className="cncl-btn" onClick={() => handleDelete(index)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Main;
