import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: '',
    category: 'Code'
  })

  function handleFormChange(event) {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({
      ...formData,
      [inputName]: inputValue,
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      text: formData.text,
      category: formData.category
    }
    onTaskFormSubmit(newTask);
  }

  const renderOptions = categories.filter(category => category !== 'All').map((category, index) => {
    return <option key={index} value={category}>{category}</option>
  })

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" name="text" value={formData.text} onChange={handleFormChange} />
      </label>
      <label>
        Category
        <select name="category" value={formData.category} onChange={handleFormChange}>
          {renderOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
