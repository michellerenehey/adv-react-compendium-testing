import './Controls.css';

export default function Controls({ type, setType }) {
  return (
    <div>
      <select value={type} onChange={(e) => setType(e.target.value)}>
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
    </div>
  );
}
