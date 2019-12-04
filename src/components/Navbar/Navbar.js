import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navbar = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [username, setUsername] = useState(null);

  useEffect(() => {
    let token = localStorage.getItem("token");
    let isTokenExpired = false;
    if (token) {
      const { exp } = jwt.decode(token);
      if (Date.now() >= exp * 1000) {
        isTokenExpired = true;
      }
    }
    // if token expired - remove token
    if (isTokenExpired) {
      localStorage.removeItem("token");
      token = localStorage.getItem("token");
    }
    if (!token) {
      setIsUserLoggedIn(false);
    } else {
      setIsUserLoggedIn(true);
      const decodedUsername = jwt.decode(token).username;
      setUsername(decodedUsername);
    }
  });

  const logout = () => {
    localStorage.removeItem("token");
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Linkedit
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav ml-auto">
          {isUserLoggedIn ? (
            <>
              <li className="nav-item pr-2">{username}</li>
              <li className="nav-item"><Link onClick={logout} to="/">Logout</Link></li>
            </>
          ) : (
            <>
              <li className="nav-item pr-2">
                <Link to="/login">Log in</Link>
              </li>
              <li className="nav-item">
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
