import React from "react";
import { NavLink } from "react-router-dom";

const style = {
  width: "12px",
  padding: "10px",
  backgroundColor: "blue",
  color: "White",
  textDecoration: "none"
};

const activeStyle = {
  backgroundColor: "white",
  color: "black"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={style} activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/movies" exact style={style} activeStyle={activeStyle}>
        Movies
      </NavLink>
      <NavLink to="/directors" exact style={style} activeStyle={activeStyle}>
        Directors
      </NavLink>
      <NavLink to="/actors" exact style={style} activeStyle={activeStyle}>
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
