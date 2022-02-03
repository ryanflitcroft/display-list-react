
import './App.css';
import { getBands, getDogs, getMovies, getRestaurants } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import DogsList from './DogsList';
import MoviesList from './MoviesList';
import RestaurantsList from './RestaurantsList';
import BandsList from './BandsList';

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
      <h1>Display a List</h1>
      <DogsList dogs={dogs} />
      <MoviesList movies={movies} />
      <RestaurantsList restaurants={restaurants} />
      <BandsList bands={bands} />
    </main>
  );
}

export default App;
