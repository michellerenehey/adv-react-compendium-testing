import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

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
    id: '10-barrel-brewing-co-bend-1',
    name: 'MOCK MOCK MOCK 10 Barrel Brewing Co',
    brewery_type: 'large',
    street: '62970 18th St',
    address_2: null,
    address_3: null,
    city: 'Bend',
    state: 'Oregon',
    county_province: null,
    postal_code: '97701-9847',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5415851007',
    website_url: 'http://www.10barrel.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: '10-barrel-brewing-co-bend-2',
    name: 'MOCK MOCK MOCK 10 Barrel Brewing Co',
    brewery_type: 'large',
    street: '1135 NW Galveston Ave Ste B',
    address_2: null,
    address_3: null,
    city: 'Bend',
    state: 'Oregon',
    county_province: null,
    postal_code: '97703-2465',
    country: 'United States',
    longitude: null,
    latitude: null,
    phone: '5415851007',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: '10-barrel-brewing-co-bend-pub-bend',
    name: 'MOCK MOCK MOCK 10 Barrel Brewing Co - Bend Pub',
    brewery_type: 'large',
    street: '62950 NE 18th St',
    address_2: null,
    address_3: null,
    city: 'Bend',
    state: 'Oregon',
    county_province: null,
    postal_code: '97701',
    country: 'United States',
    longitude: '-121.2809536',
    latitude: '44.0912109',
    phone: '5415851007',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: '10-barrel-brewing-co-boise-boise',
    name: '10 Barrel Brewing Co - Boise',
    brewery_type: 'large',
    street: '826 W Bannock St',
    address_2: null,
    address_3: null,
    city: 'Boise',
    state: 'Idaho',
    county_province: null,
    postal_code: '83702-5857',
    country: 'United States',
    longitude: '-116.202929',
    latitude: '43.618516',
    phone: '2083445870',
    website_url: 'http://www.10barrel.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: '10-barrel-brewing-co-denver-denver',
    name: '10 Barrel Brewing Co - Denver',
    brewery_type: 'large',
    street: '2620 Walnut St',
    address_2: null,
    address_3: null,
    city: 'Denver',
    state: 'Colorado',
    county_province: null,
    postal_code: '80205-2231',
    country: 'United States',
    longitude: '-104.9853655',
    latitude: '39.7592508',
    phone: '7205738992',
    website_url: null,
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: '10-barrel-brewing-co-portland',
    name: '10 Barrel Brewing Co',
    brewery_type: 'large',
    street: '1411 NW Flanders St',
    address_2: null,
    address_3: null,
    city: 'Portland',
    state: 'Oregon',
    county_province: null,
    postal_code: '97209-2620',
    country: 'United States',
    longitude: '-122.6855056',
    latitude: '45.5259786',
    phone: '5032241700',
    website_url: 'http://www.10barrel.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
  {
    id: '10-barrel-brewing-co-san-diego',
    name: '10 Barrel Brewing Co',
    brewery_type: 'large',
    street: '1501 E St',
    address_2: null,
    address_3: null,
    city: 'San Diego',
    state: 'California',
    county_province: null,
    postal_code: '92101-6618',
    country: 'United States',
    longitude: '-117.129593',
    latitude: '32.714813',
    phone: '6195782311',
    website_url: 'http://10barrel.com',
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
  {
    id: '101-brewery-quilcene',
    name: '101 Brewery',
    brewery_type: 'brewpub',
    street: '294793 US Highway 101',
    address_2: null,
    address_3: null,
    city: 'Quilcene',
    state: 'Washington',
    county_province: null,
    postal_code: '98376-9000',
    country: 'United States',
    longitude: '-122.87558226136872',
    latitude: '47.823475773720666',
    phone: '3607656485',
    website_url: 'http://www.101brewery.com',
    updated_at: '2021-10-23T02:24:55.243Z',
    created_at: '2021-10-23T02:24:55.243Z',
  },
];

// set up server
const server = setupServer(
  rest.get('https://api.openbrewerydb.org/breweries', (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);
// listen for server start
beforeAll(() => server.listen());

// close server when done
afterAll(() => server.close());

// TEST 1
test('renders the header and control panel', async () => {
  render(<App />);

  const header = await screen.findByRole('heading', { name: /find-a-brewery!/i });
  expect(header).toBeInTheDocument();

  const controls = await screen.findByRole('combobox');
  expect(controls).toBeInTheDocument();
});

// TEST 2
test('renders a list of breweries on page load with default type setting', async () => {
  render(<App />);

  const types = await screen.findAllByRole('listitem');
  expect(types).toHaveLength(10);
});

// TEST 3
test('we can filter breweries by_type from dropdown', async () => {
  render(<App />);

  const controls = await screen.findByRole('combobox');
  userEvent.selectOptions(controls, [screen.getByText('all')]);
  expect(screen.getByRole('option', { name: 'all' }).selected).toBe(true);
});
