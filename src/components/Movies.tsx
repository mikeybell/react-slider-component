import React, { FunctionComponent } from 'react';
import { IMAGE_PATH } from './lib/constants';
import { useMovies } from './hooks/useMovies';
import { Loading } from './Loading';
import './styles/movies.css';

interface Props {
  translateValue: number;
}

export const Movies: FunctionComponent<Props> = ({ translateValue }) => {
  const { movies, error } = useMovies();

  if (movies.length === 0 && !error) {
    return <Loading />;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <ul
      className="movies-container"
      style={{
        transform: `translateX(${translateValue}%)`,
        transition: 'all 600ms ease-in-out'
      }}>
      {movies.map((movie) => {
        return (
          <li
            className="movie-container"
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
