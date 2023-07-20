import React from 'react';

function CategoryFilter({ categories, activeCategory, setCategory }) {
  return (
    <div className="category-filter">
      {categories.map((category, index) => (
        <button
          key={category}
          onClick={() => setCategory(category)}
          className={activeCategory === category ? 'active' : ''}
          id={'filter-btn-'+[index]}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
