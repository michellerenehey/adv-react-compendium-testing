import './BrewCard.css';

export default function BrewCard({ breweries }) {
  console.log(breweries);
  return (
    <ul className="brewCard">
      {breweries.map((brew) => (
        <li key={brew.id} className="cardStyle">
          <h3>{brew.name}</h3>
          <p>
            {brew.city}, {brew.state}
          </p>
          <p>{brew.brewery_type}</p>
        </li>
      ))}
    </ul>
  );
}
