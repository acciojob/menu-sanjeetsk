import React from 'react';
import Dish from './Dish';

function DishList({ dishes, category }){
    const filteredDishes = 
        category === 'All' ? dishes : dishes.filter((dish) => dish.category === category);

    return(
        <div className='dish-list'>
            {filteredDishes.map((dish) => (
                <Dish key={dish.id} dish={dish}/>
            ))}
        </div>
    );
}

export default DishList;