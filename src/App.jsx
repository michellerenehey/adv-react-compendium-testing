import { useEffect, useState } from 'react';
import './App.css';
import { fetchBrews } from './services/breweries';
import BrewCard from './components/BrewCard/BrewCard';
import Controls from './components/Controls/Controls';
import background from './assets/pattern.png';
import Button from '@mui/material/Button';

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
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <h1 className="brewery-header">FIND-A-BREWERY!</h1>
      <Controls type={type} setType={setType} />
      <BrewCard breweries={breweries} />
      <div className="pagination">
        <p className="currentPage">Current Page: {currentPage}</p>
        <div className="button-space">
          {currentPage !== 1 && (
            <Button
              variant="contained"
              color="secondary"
              className="pagination-button"
              onClick={handlePrevPage}
            >
              Prev Page
            </Button>
          )}
          <Button
            variant="contained"
            color="secondary"
            className="pagination-button"
            onClick={handleNextPage}
          >
            Next Page
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
