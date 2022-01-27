export async function fetchBrews(type, currentPage) {
  const params = new URLSearchParams();
  params.set('page', currentPage);

  if (type !== 'all') {
    params.set('by_type', type);
  }

  const response = await fetch(`https://api.openbrewerydb.org/breweries?${params.toString()}`);
  const data = await response.json();
  return data;
}
