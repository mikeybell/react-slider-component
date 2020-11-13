import { useState, useEffect } from 'react';
import {
  API_KEY,
  BASE_PATH,
  TRENDING_MOVIES,
} from '../lib/constants';

const URL = `${BASE_PATH}${TRENDING_MOVIES}${API_KEY}`

export const useMovies = () => {
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

  return movies;
}