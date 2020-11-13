import React, { useState } from 'react';
import { IMAGE_PATH } from './lib/constants';
import { useMovies } from './hooks/useMovies';
import { ReactComponent as ArrowNext } from './assets/arrow_next.svg';
import { ReactComponent as ArrowPrev } from './assets/arrow_prev.svg';
import './styles/movies.css';

const MOVIES_PER_PANEL = 4;
const TRANSLATE_WIDTH = 100;

export const Movies = () => {
  const [count, setCount] = useState(0);
  const [translateValue, setTranslateValue] = useState(0);
  const movies = useMovies();

  const numberOfPanels = movies.length/MOVIES_PER_PANEL;

  const goToPrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setTranslateValue(translateValue + TRANSLATE_WIDTH)
    };
  };

  const goToNext = () => {
    if (count < numberOfPanels) {
      setCount(count + 1);
      setTranslateValue(translateValue - TRANSLATE_WIDTH)
    };
  };

  if (movies.length === 0) {
    return <p>Loading...</p>
  }

  return (
    <>
      {count > 0 && (
        <button className="button button--prev" onClick={goToPrev}>
          <ArrowPrev />
        </button>
      )}
      <ul
        className="movies-container"
        style={{
          transform: `translateX(${translateValue}%)`,
          transition: 'all 300ms ease-in-out'
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
      {count < (numberOfPanels - 1) && (
        <button className="button button--next" onClick={goToNext}>
          <ArrowNext />
        </button>
      )}
    </>
  )
}
