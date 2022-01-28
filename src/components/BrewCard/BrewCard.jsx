import './BrewCard.css';

export default function BrewCard({ breweries }) {
  return (
    <ul className="brewCard">
      {breweries.map((brew) => (
        <li key={brew.id} className="cardStyle">
          <h3>
            <a href={brew.website_url}>{brew.name}</a>
          </h3>
          <p>{brew.street}</p>
          <p>
            {brew.city}, {brew.state}
          </p>
          <p>brewery type: {brew.brewery_type}</p>
        </li>
      ))}
    </ul>
  );
}
