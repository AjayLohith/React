import React, { useState } from "react";

const ArrayUpdation = () => {
  const [food, setFood] = useState(["Biryani", "Mandi", "Noodels"]);
  const [inputValue, setInputValue] = useState(""); // This tracks the input field

  const handleAddFood = () => {
    if (inputValue.trim()) { // Only add if not empty or just spaces
      setFood([...food, inputValue]); // Add new item to the food array
      setInputValue(""); // Clear the input field after adding
    }
  };

  const handleRemoveFood = (index) => {
    setFood(food.filter((_, i) => i !== index)); // Remove item by index
  };

  return (
    <div>
      <h1>Foods</h1>
      <ul>
        {food.map((food, index) => (
          <li
            key={index}
            style={{ cursor: "pointer" }}
            onClick={() => handleRemoveFood(index)}
          >
            {food}
          </li>
        ))}
      </ul>

      {/* Controlled input field */}
      <input
        type="text"
        value={inputValue} // The value comes from React state
        onChange={(e) => setInputValue(e.target.value)} // Update state on change
        placeholder="Enter food.."
      />

      <button onClick={handleAddFood}>Add Food</button>
    </div>
  );
};

export default ArrayUpdation;
