import './BrewCard.css';

export default function BrewCard({ breweries }) {
  return (
    <div className="brewCard">
      {breweries.map((brew) => (
        <div key={brew.id} className="cardStyle">
          <h3>{brew.name}</h3>
          <p>
            {brew.city}, {brew.state}
          </p>
          <p>{brew.brewery_type}</p>
        </div>
      ))}
    </div>
  );
}
