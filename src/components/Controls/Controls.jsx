import './Controls.css';

export default function Controls({ type, setType }) {
  return (
    <div className="dropdown">
      Filter by type:
      <label>
        <select className="dropdown-select" value={type} onChange={(e) => setType(e.target.value)}>
          <option>all</option>
          <option>micro</option>
          <option>nano</option>
          <option>regional</option>
          <option>brewpub</option>
          <option>large</option>
          <option>planning</option>
          <option>bar</option>
          <option>contract</option>
          <option>proprietor</option>
          <option>closed</option>
        </select>
      </label>
    </div>
  );
}
