import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Favourites from "./pages/Favourites"; // ✅ import

import "./styles/global.css";

// 🔒 Wrapper component to protect private routes
const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/login" />;
};

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/movie/:id"
        element={
          <PrivateRoute>
            <MovieDetails />
          </PrivateRoute>
        }
      />
      <Route
        path="/favourites"
        element={
          <PrivateRoute>
            <Favourites />
          </PrivateRoute>
        }
      />

      <Route path="*" element={<Error />} />
    </Routes>
  </>
);

export default App;




