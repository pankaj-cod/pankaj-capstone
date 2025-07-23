import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          🎬 MovieVerse
        </Link>

        <ul className="nav-menu">
          <li>
            <Link to="/" className="nav-item">Home</Link>
          </li>

          {isLoggedIn ? (
            <>
              <li>
                <Link to="/favourites" className="nav-item">Favourites</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="nav-item logout-button">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="nav-item">Login</Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

