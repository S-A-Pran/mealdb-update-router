import React from "react";
import { useLoaderData } from "react-router-dom";
import "./Category.css";

const Category = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="cat">
      <p>Found: {data.meals.length}</p>
      <div className="meals">
        {data.meals.map((item) => (
          <div className="meal-box" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h4>{item.strMeal}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
