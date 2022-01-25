import { useEffect } from 'react';

import './App.css';
// import { fetchBrews } from './services/breweries';

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://api.openbrewerydb.org/breweries');
      const temp = await data.json();
      console.log(temp);
    };
    fetchData();
  });

  return <div className="App">app component</div>;
}

export default App;
