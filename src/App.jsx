import { useEffect, useState } from 'react';

import './App.css';
import { fetchBrews } from './services/breweries';
import BrewCard from './components/BrewCard/BrewCard';
import Controls from './components/Controls/Controls';

function App() {
  const [breweries, setBreweries] = useState([]);
  const [type, setType] = useState('all');
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  // data call
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBrews(type, currentPage);
      setBreweries(data);
      setLoading(false);
    };
    fetchData();
  }, [type, currentPage]);

  // pagination functions
  const handlePrevPage = () => {
    setCurrentPage((prevState) => --prevState);
    setLoading(true);
  };

  const handleNextPage = () => {
    setCurrentPage((prevState) => ++prevState);
    setLoading(true);
  };

  // loading state
  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="App">
      <h1>BREWERIES!</h1>
      <Controls type={type} setType={setType} />
      <div>
        <BrewCard breweries={breweries} />
      </div>
      <p>Current Page: {currentPage}</p>
      {currentPage !== 1 && <button onClick={handlePrevPage}>Prev Page</button>}
      <button onClick={handleNextPage}>Next Page</button>
    </div>
  );
}

export default App;
