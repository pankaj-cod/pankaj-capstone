import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/Details.css";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=195feb3b&i=${id}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return <div className="status-text">Loading...</div>;

  return (
    <div className="details-container">
      <img src={movie.Poster} alt={movie.Title} className="details-poster" />
      <div className="details-info">
        <h1>{movie.Title}</h1>
        <p><strong>Year:</strong> {movie.Year}</p>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
