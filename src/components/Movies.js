import React from 'react';
import { IMAGE_PATH } from './lib/constants';
import { useMovies } from './hooks/useMovies';
import './styles/movies.css';

export const Movies = ({ translateValue }) => {
  const movies = useMovies();

  if (movies.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <ul
      className="movies-container"
      style={{
        transform: `translateX(${translateValue}%)`,
        transition: 'all 600ms ease-in-out'
      }}>
      {movies.map((movie, index) => {
        return (
          <li
            className="movie-container"
            index={index}
            key={movie.id}
          >
            <img
              className="movie-poster"
              src={`${IMAGE_PATH}/${movie.poster_path}`}
              alt={movie.title}
            />
          </li>
        )
      })}
    </ul>
  )
}
