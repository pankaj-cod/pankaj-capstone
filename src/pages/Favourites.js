import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";
import "../styles/Favourites.css";

export default function Favourites() {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const user = auth.currentUser;
      if (!user) return;

      const favsRef = collection(db, "users", user.uid, "favourites");
      const snapshot = await getDocs(favsRef);
      const favs = snapshot.docs.map((doc) => doc.data());
      setFavourites(favs);
    };

    fetchFavourites();
  }, []);

  return (
    <div className="favourites-page">
      <h2>🎬 Your Favourite Movies</h2>
      {favourites.length === 0 ? (
        <p>No favourites added yet.</p>
      ) : (
        <div className="movie-grid">
          {favourites.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
