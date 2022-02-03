
import './App.css';
import { getDogs, getMovies } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import Dogs from './Dogs';
import Movies from './Movies';

function App() {
  const [dogs, setDogs] = useState([]);
  const [movies, setMovies] = useState([]);

  async function fetchDogsData() {
    const data = await getDogs();
    setDogs(data);
  }

  async function fetchMovieData() {
    const data = await getMovies();
    setMovies(data);
  }

  useEffect(() => {
    fetchDogsData();
    fetchMovieData();
  }, []);

  return (
    <main>
      <Dogs dogs={dogs} />
      <Movies movies={movies} />
    </main>
  );
}

export default App;
