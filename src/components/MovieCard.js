import React from "react";
import { Link } from "react-router-dom";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  const addToFavourites = async () => {
    const user = auth.currentUser;
    if (!user) {
      alert("Please log in to add to favourites");
      return;
    }

    try {
      const favRef = doc(db, "users", user.uid, "favourites", movie.imdbID);
      await setDoc(favRef, {
        imdbID: movie.imdbID,
        Title: movie.Title,
        Poster: movie.Poster,
        Year: movie.Year,
      });

      alert("Movie added to favourites!");
    } catch (error) {
      console.error("Error adding to favourites:", error);
    }
  };

  return (
    <div className="movie-card">


      <Link to={`/movie/${movie.imdbID}`}>
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
        <h2 className="movie-title">{movie.Title}</h2>
        <p className="movie-year">{movie.Year}</p>
      </Link>
      <button onClick={addToFavourites} className="fav-btn">❤️ Add to Favourites</button>
    </div>
  );
};

export default MovieCard;
