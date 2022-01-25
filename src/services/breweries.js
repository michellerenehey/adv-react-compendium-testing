export async function fetchBrews(type) {
  const params = new URLSearchParams();

  if (type !== 'all') {
    params.set('by_type', type);
  }

  const response = await fetch(`https://api.openbrewerydb.org/breweries?${params.toString()}`);

  const data = response.json();
  return data;
}

// export async function getPokemon(query, order, selectedType, currentPage) {
//   const params = new URLSearchParams();
//   params.set('pokemon', query);
//   params.set('sort', 'pokemon');
//   params.set('direction', order);
//   params.set('page', currentPage);

//   if (selectedType !== 'all') {
//     params.set('type', selectedType);
//   }

//   const response = await fetch(
//     `https://pokedex-alchemy.herokuapp.com/api/pokedex?${params.toString()}`
//   );

//   const data = await response.json();
//   return data;
// }

// export async function getTypes() {
//   const response = await fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex/types');
//   const data = await response.json();
//   return data.map((item) => item.type);
// }
