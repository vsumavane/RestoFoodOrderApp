import React, { useState, useEffect } from 'react';

const Catalog = () => {
  const [foodItems, setFoodItems] = useState([]);

  return (
    <div>
      <h2>Catalog</h2>
      <div className="food-items">
        {foodItems.map((foodItem) => (
          <div key={foodItem._id} className="food-item">
            <h3>{foodItem.title}</h3>
            <img src={foodItem.imageUrl} alt={foodItem.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;