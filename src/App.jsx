import { useEffect, useState } from 'react';

import './App.css';
import { fetchBrews } from './services/breweries';
import BrewCard from './components/BrewCard/BrewCard';
import Controls from './components/Controls/Controls';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [type, setType] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBrews(type);
      setBreweries(data);
      setLoading(false);
      // console.log(data);
    };
    fetchData();
  }, [type]);

  if (loading) return <h3>Loading...</h3>;

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
