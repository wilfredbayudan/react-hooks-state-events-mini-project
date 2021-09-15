import React from "react";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {

  function handleCategoryChange(newCategory) {
    setSelectedCategory(newCategory)
  }

  const renderButtons = categories.map((category, index) => (
    <button key={index} onClick={() => handleCategoryChange(category)} className={selectedCategory === category ? 'selected' : ''}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {renderButtons}
    </div>
  );
}

export default CategoryFilter;
