import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [tasks, setTasks] = useState(TASKS);

  function deleteTask(taskText) {
    console.log(`Deleting task ${taskText}`);
    setTasks(tasks.filter(task => task.text !== taskText));
  }

  function onTaskFormSubmit(newTask) {
    setTasks([
      ...tasks,
      newTask
    ])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={tasks} selectedCategory={selectedCategory} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
