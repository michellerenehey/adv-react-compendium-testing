import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from '../../App';
// import BrewCard from './BrewCard';

// create mock data
const mockResponse = [
  {
    id: '10-56-brewing-company-knox',
    name: 'MOCK MOCK MOCK 10-56 Brewing Company',
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
  },
  {
    id: '10-torr-distilling-and-brewing-reno',
    name: '10 Torr Distilling and Brewing',
    brewery_type: 'micro',
    street: '490 Mill St',
    address_2: null,
    address_3: null,
    city: 'Reno',
    state: 'Nevada',
    county_province: null,
    postal_code: '89502',
    country: 'United States',
    longitude: '-119.7732015',
    latitude: '39.5171702',
    phone: '7755307014',
    website_url: 'http://www.10torr.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
];

// set up server
const server = setupServer(
  rest.get('https://api.openbrewerydb.org/breweries', (req, res, ctx) => {
    // const select = req.url.searchParams.get('micro');
    return res(ctx.json(mockResponse));
  })
);

// listen for server start
beforeAll(() => server.listen());

// close server when done
afterAll(() => server.close());

// test
test('renders brewCard', async () => {
  render(<App />);

  // const brewName = await screen.findByRole('heading', { name: mockResponse[0].name });
  // expect(brewName).toBeInTheDocument();

  // const brewLocation = screen.getByText(`${mockResponse[0].city}, ${mockResponse[0].state}`);
  // expect(brewLocation).toBeInTheDocument();

  // const brewType = await screen.findByText(mockResponse[0].brewery_type);
  // expect(brewType).toBeInTheDocument();
  // screen.debug();
});
