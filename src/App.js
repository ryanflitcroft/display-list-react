
import './App.css';
import { getDogs } from './services/fetch-utils';
import { useState, useEffect } from 'react';
import Dogs from './Dogs';

function App() {
  const [dogs, setDogs] = useState([]);

  async function fetchDogsData() {
    const data = await getDogs();
    setDogs(data);
    console.log(dogs);
  }

  useEffect(() => {
    fetchDogsData();
  }, []);

  return (
    <>
      <Dogs dogs={dogs}
        setDogs={setDogs} />
    </>
  );
}

export default App;
