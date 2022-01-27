export async function fetchBrews(type) {
  const params = new URLSearchParams();

  if (type !== 'all') {
    params.set('by_type', type);
  }

  const response = await fetch(`https://api.openbrewerydb.org/breweries?${params.toString()}`);

  const data = await response.json();
  return data;
}
