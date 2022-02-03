
import './App.css';
import { getDogs, getMovies, getRestaurants } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import Dogs from './Dogs';
import Movies from './Movies';
import Restaurants from './Restaurants';

function App() {
  const [dogs, setDogs] = useState([]);
  const [movies, setMovies] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  async function fetchDogsData() {
    const data = await getDogs();
    setDogs(data);
  }

  async function fetchMovieData() {
    const data = await getMovies();
    setMovies(data);
  }

  async function fetchRestaurantsData() {
    const data = await getRestaurants();
    setRestaurants(data);
  }

  useEffect(() => {
    fetchDogsData();
    fetchMovieData();
    fetchRestaurantsData();
  }, []);

  return (
    <main>
      <Dogs dogs={dogs} />
      <Movies movies={movies} />
      <Restaurants restaurants={restaurants} />
    </main>
  );
}

export default App;
