import React, { useState, useEffect } from 'react';
import { BASE_PATH, TRENDING_MOVIES, API_KEY } from "./constants";

const URL = `${BASE_PATH}${TRENDING_MOVIES}${API_KEY}`

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      // make try/catch
      const res = await fetch(URL);
      const data = await res.json();
      setMovies(data.results)
    }
    getMovies();
  }, []);

  if (movies.length === 0) {
    return <p>Loading...</p>
  }

  return (
    movies.map(movie => {
      return (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
      )
    })
  )
}
