import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Linkedit
      </Link>
      <i className="fas fa-bars fa-1x"></i>
    </nav>
  );
};

export default Navbar;
