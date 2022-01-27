import { render, screen } from '@testing-library/react';
import BrewCard from './BrewCard';

const beer = {
  id: '10-56-brewing-company-knox',
  name: '10-56 Brewing Company',
  brewery_type: 'micro',
  street: '400 Brown Cir',
  address_2: null,
  address_3: null,
  city: 'Knox',
  state: 'Indiana',
  county_province: null,
  postal_code: '46534',
  country: 'United States',
  longitude: '-86.627954',
  latitude: '41.289715',
  phone: '6308165790',
  website_url: null,
  updated_at: '2021-10-23T02:24:55.243Z',
  created_at: '2021-10-23T02:24:55.243Z',
};

test('renders a brewCard', async () => {
  render(<BrewCard breweries={[beer]} />);

  const brewName = await screen.findByRole('heading', { name: beer.name });
  expect(brewName).toBeInTheDocument();

  const brewLocation = screen.getByText(`${beer.city}, ${beer.state}`);
  expect(brewLocation).toBeInTheDocument();

  const brewType = await screen.findByText(beer.brewery_type);
  expect(brewType).toBeInTheDocument();
  screen.debug();
});
