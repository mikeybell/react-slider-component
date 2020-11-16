import { useState, useEffect } from 'react';
import {
  API_KEY,
  BASE_PATH,
  TRENDING_MOVIES,
} from '../lib/constants';

const URL = `${BASE_PATH}${TRENDING_MOVIES}${API_KEY}`

export const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();

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
      console.log("ERROR", err)
      setError(err);
    }
  }

  return { movies, error };
}