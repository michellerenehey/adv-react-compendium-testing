import { useEffect, useState } from 'react';

import './App.css';
import { fetchBrews } from './services/breweries';

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
      {breweries.map((brew) => (
        <p key={brew.id}>{brew.name}</p>
      ))}
    </div>
  );
}

export default App;
