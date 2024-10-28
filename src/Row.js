import React, { useState, useEffect } from 'react';
import axios from './axios'; // You'll create this later
import './Row.css'; // Create this file for styling

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code that runs based on a specific condition/variable
  useEffect(() => {
    // If [] (empty), run once when the row loads, and don't run again.
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {/* Several row__poster(s) */}
        {movies.map(movie => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
