import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the header and control panel', async () => {
  render(<App />);

  const header = await screen.findByRole('heading', { name: /breweries!/i });
  expect(header).toBeInTheDocument();

  const controls = await screen.findByRole('combobox');
  expect(controls).toBeInTheDocument();
});

test('renders a list of breweries on page load with default type setting', async () => {
  render(<App />);

  const types = await screen.findAllByRole('listitem');
  expect(types).toHaveLength(20);
});
