import { useState, useEffect } from 'react';
import {
  API_KEY,
  BASE_PATH,
  TRENDING_MOVIES,
} from '../lib/constants';
import { Movies } from './types';

const URL = `${BASE_PATH}${TRENDING_MOVIES}${API_KEY}`;

export const useMovies = (): Movies => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      const res = await fetch(URL);
      if (!res.ok) throw new Error();
      const data = await res.json();
      setMovies(data.results)
    } catch (err) {
      setError(err.message);
    }
  }

  return { movies, error };
}