import React from 'react';

function Dish({ dish }) {
  const { title, category, price, img, desc } = dish;

  return (
    <div className="dish">
      <img src={img} alt={title} />
      <div className="dish-details">
        <div className='title'>
          <h2>{title}</h2>
          <p className='price'>$ &nbsp;{price}</p>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default Dish;
