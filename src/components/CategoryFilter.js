import React from 'react';

function CategoryFilter({ categories, activeCategory, setCategory }) {
  return (
    <div className="category-filter">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={activeCategory === category ? 'active' : ''}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
