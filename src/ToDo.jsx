import React, { useState } from "react";
import "./Styles/ToDo.css";

const ToDo = () => {
  const [tasks, setTasks] = useState(["LeetCode🧑‍💻", "Binge Anime"]);
  const [newTask, setNewTask] = useState("");

  const handleTasks = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if(newTask.trim()!==""){
    setTasks(t=>[...t,newTask]);
    setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const dlt=tasks.filter((_,i)=>i!=index);
    setTasks(dlt)
  };

  const moveUpTask = (index) => {
    if(index>0){
      const updateTask=[...tasks];
      [updateTask[index],updateTask[index-1]]=[updateTask[index-1],updateTask[index]];
      setTasks(updateTask);
    }
  };
  const moveDownTask = (index) => {
     if(index<tasks.length-1){
      const updateTask=[...tasks];
      [updateTask[index],updateTask[index+1]]=[updateTask[index+1],updateTask[index]];
      setTasks(updateTask);
    }
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleTasks}
        />
          <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
    <ol>
      {tasks.map((task,index)=>
        <li key={index} >
            <span className="text">{task}</span>
            <button className="delete-button"
             onClick={()=>deleteTask(index)}>
              Delete
             </button>

              <button className="move-up-button"
             onClick={()=>moveUpTask(index)}>
              Move Up
             </button>

              <button className="move-down-button"
             onClick={()=>moveDownTask(index)}>
              Move Down
             </button>
             
             
        </li>
    
    
    )}


    </ol>
    </div>
  );
};

export default ToDo;
