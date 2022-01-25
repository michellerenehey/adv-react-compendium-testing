import { useEffect, useState } from 'react';

import './App.css';
import { fetchBrews } from './services/breweries';
import BrewCard from './components/BrewCard/BrewCard';

function App() {
  const [breweries, setBreweries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBrews();
      setBreweries(data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>BREWERIES!</h1>
      <div>
        <BrewCard breweries={breweries} />
      </div>
    </div>
  );
}

export default App;
