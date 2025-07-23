import React from "react";
import { useGlobalContext } from "../context";
import MovieCard from "../components/MovieCard";
import "../styles/Home.css";
import Navbar from "../components/Navbar";

const Home = () => {
  const { movies, setQuery, loading, error } = useGlobalContext();

  return (
    <div className="home-container">

      <header className="home-header">
        <h1>🎬 MovieVerse</h1>
        <input
          className="search-input"
          type="text"
          placeholder="Search movies..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </header>
      <main>
        {loading && <p className="status-text">Loading...</p>}
        {error && <p className="status-text error">{error}</p>}
        <div className="movie-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
