// import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
// import App from './App';
// import userEvent from '@testing-library/user-event';

// test('renders the header and control panel', async () => {
//   render(<App />);

//   await waitForElementToBeRemoved(await screen.findByText('Loading...'), { timeout: 5000 });

//   const header = await screen.findByRole('heading', { name: /breweries!/i });
//   expect(header).toBeInTheDocument();

//   const controls = await screen.findByRole('combobox');
//   expect(controls).toBeInTheDocument();
// });

// test('renders a list of breweries on page load with default type setting', async () => {
//   render(<App />);

//   const types = await screen.findAllByRole('listitem');
//   expect(types).toHaveLength(20);
// });

// test('we can filter breweries by_type from dropdown', async () => {
//   render(<App />);

//   const controls = await screen.findByRole('combobox');
//   userEvent.selectOptions(controls, [screen.getByText('all')]);
//   expect(screen.getByRole('option', { name: 'all' }).selected).toBe(true);
// });
