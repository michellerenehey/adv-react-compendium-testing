import { useEffect, useState } from 'react';

import './App.css';
import { fetchBrews } from './services/breweries';
import BrewCard from './components/BrewCard/BrewCard';
import Controls from './components/BrewCard/Controls/Controls';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [type, setType] = useState('micro');

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBrews(type);
      setBreweries(data);
      console.log(data);
    };
    fetchData();
  }, [type]);

  return (
    <div className="App">
      <h1>BREWERIES!</h1>
      <Controls type={type} setType={setType} />
      <div>
        <BrewCard breweries={breweries} />
      </div>
    </div>
  );
}

export default App;
