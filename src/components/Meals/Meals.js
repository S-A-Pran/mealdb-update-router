import React, { useState } from "react";
import "./Meals.css";

const Meals = () => {
  const [data, setData] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    let key = e.target.country.value;
    console.log(key);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${key}`)
      .then((res) => res.json())
      .then((data) => setData(data.meals));
  };
  return (
    <div className="section">
      <p>Search Meals By Country:</p>
      <form className="form" onSubmit={handleSubmit}>
        <input className="country" type="text" name="country" id="" />
        <button type="submit">Serach</button>
      </form>

      {data && <p style={{ margin: "10px 0px" }}>Meal Found: {data?.length}</p>}
      <div className="meals">
        {data?.map((item) => (
          <div className="meal-box" key={item.idMeal}>
            <img src={item.strMealThumb} alt={item.strMeal} />
            <h4>{item.strMeal}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Meals;
