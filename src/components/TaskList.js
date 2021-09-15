import React from "react";
import Task from './Task';

function TaskList({ tasks, deleteTask, selectedCategory }) {

  const renderTasks = tasks.filter(task => {
    if (selectedCategory === 'All') {
      return true;
    } else {
      return task.category === selectedCategory;
    }
  }).map(
    (task, index) => <Task key={index} id={index} text={task.text} category={task.category} deleteTask={deleteTask} />
  )
  
  return (
    <div className="tasks">
      {renderTasks}
    </div>
  );
}

export default TaskList;
