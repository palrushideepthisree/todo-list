import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function addTask() {
    let newTasks = Array.from(tasks);
    newTasks.push(task);
    setTasks(newTasks);
    setTask("");
  }

  return (
    <div>
      <h2 style={{ color: "black" }}>Todo List</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() =>
                setTasks(tasks.filter((_, i) => i !== index))
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <button onClick={() => setTasks([])}>Clear</button>
    </div>
  );
}

export default App;