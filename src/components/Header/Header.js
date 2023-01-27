import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <Link to="/home">Home</Link>
      <Link to="/meals">Meals</Link>
      {/* <Link to={`/meal/:id`}>Home</Link> */}
    </div>
  );
};

export default Header;
