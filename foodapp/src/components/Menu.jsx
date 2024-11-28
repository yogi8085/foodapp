import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Menu.css";

const Menu = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoodData = async () => {
      const url = "https://www.themealdb.com/api/json/v1/1/random.php";
      const numberOfRequests = 12;
      let allMeals = [];

      try {
        for (let i = 0; i < numberOfRequests; i++) {
          const response = await axios.get(url);
          allMeals = [...allMeals, ...response.data.meals];
        }

        setFoodItems(allMeals);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching food data:", err);
        setError("Failed to fetch food items.");
        setLoading(false);
      }
    };

    fetchFoodData();
  }, []);

  if (loading) return <div className="loading">Loading food items...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="menu-container">
      <h1 className="menu-heading">Explore Our Menu</h1>
      <div className="menu-grid">
        {foodItems.map((food, index) => (
          <div key={index} className="food-card">
            <img
              src={food.strMealThumb}
              alt={food.strMeal}
              className="food-image"
            />
            <div className="food-info">
              <h3 className="food-title">{food.strMeal}</h3>
              <p className="food-description">
                {food.strInstructions.slice(0, 100)}...
              </p>
              <a
                href={food.strSource}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="food-button">View Recipe</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
