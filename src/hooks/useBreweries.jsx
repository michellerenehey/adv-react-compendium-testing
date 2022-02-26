import { useState, useEffect } from 'react';
import { fetchBrews } from '../services/breweries';

export function useBreweries() {
  const [type, setType] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const [zipcode, setZipcode] = useState('');
  const [breweries, setBreweries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchBrews(type, currentPage, zipcode);
      setBreweries(data);
      setLoading(false);
    };
    fetchData();
  }, [type, currentPage, zipcode]);

  return {
    type,
    setType,
    currentPage,
    setCurrentPage,
    zipcode,
    setZipcode,
    breweries,
    loading,
    setLoading,
  };
}
