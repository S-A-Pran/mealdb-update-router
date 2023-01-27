import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="home">
      <p>Categories found: {data.meals.length}</p>

      <div className="meal">
        {data.meals.map((item) => (
          <div key={item.strCategory}>
            <Link to={`/category/${item.strCategory}`}>
              <button>{item.strCategory}</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
