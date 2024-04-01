import React from 'react';

const FoodItem = ({ item }) => {
  return (
    <div className="food-item">
      <img src={item.imageUrl} alt={item.name} />
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Description: {item.description}</p>
      <button>Add to Cart</button>
    </div>
  );
};


const FoodCatalog = ({ foodItems }) => {
  return (
    <div className="food-catalog">
      {foodItems.map((item) => (
        <FoodItem key={item._id} item={item} />
      ))}
    </div>
  );
};

export default FoodCatalog;