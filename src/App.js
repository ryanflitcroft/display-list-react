
import './App.css';
import { getBands, getDogs, getMovies, getRestaurants } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import Dogs from './Dogs';
import Movies from './Movies';
import Restaurants from './Restaurants';
import Bands from './Bands';

function App() {
  const [dogs, setDogs] = useState([]);
  const [movies, setMovies] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [bands, setBands] = useState([]);

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

  async function fetchBandsData() {
    const data = await getBands();
    setBands(data);
  }

  useEffect(() => {
    fetchDogsData();
    fetchMovieData();
    fetchRestaurantsData();
    fetchBandsData();
  }, []);

  return (
    <main>
      <Dogs dogs={dogs} />
      <Movies movies={movies} />
      <Restaurants restaurants={restaurants} />
      <Bands bands={bands} />
    </main>
  );
}

export default App;
