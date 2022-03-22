import React from "react";
import { Link } from "react-router-dom";
import StudioGhiblilogo from "./Studio_Ghibli_logo.png";


const NavBar = () => {

    return (
        <>
          <nav className="topnav">
            <img id="logo" src={StudioGhiblilogo} />
            <Link to="/Home" id="navlink">Home</Link>
            <Link to="/About" id="navlink">About</Link>
            <Link to="/Films" id="navlink">Films</Link>
            <Link to="/People" id="navlink">People</Link>
          </nav>

        </>
      );
};

export default NavBar;