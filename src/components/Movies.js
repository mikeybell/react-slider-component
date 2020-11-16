import React from 'react';
import { IMAGE_PATH } from './lib/constants';
import { useMovies } from './hooks/useMovies';
import { Loading } from './Loading';
import './styles/movies.css';

export const Movies = ({ translateValue }) => {
  const { movies, error } = useMovies();

  if (movies.length === 0 && !error) {
    return <Loading />;
  }

  if (error) {
    return <p className="error-message">{error.message}</p>;
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
