import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = "https://www.omdbapi.com/?apikey=195feb3b&s=";

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchMovies = async () => {
    try {
      const res = await fetch(`${API_URL}${query}`);
      const data = await res.json();
      if (data.Response === "True") {
        setMovies(data.Search);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <AppContext.Provider value={{ movies, setQuery, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => useContext(AppContext);
export { AppProvider };
