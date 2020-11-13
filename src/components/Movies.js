import React, { useState, useEffect } from 'react';
import {
  API_KEY,
  BASE_PATH,
  IMAGE_PATH,
  TRENDING_MOVIES,
} from './lib/constants';
import './styles/movies.css';

const URL = `${BASE_PATH}${TRENDING_MOVIES}${API_KEY}`

export const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        if (!res.ok) throw new Error();
        setMovies(data.results)
      } catch (err) {
        console.log("ERROR", err)
      }
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
          className="movie-poster"
          key={movie.id}
          src={`${IMAGE_PATH}/${movie.poster_path}`}
          alt={movie.title}
        />
      )
    })
  )
}
