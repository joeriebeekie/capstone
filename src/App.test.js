import { render, screen } from '@testing-library/react';
import Booking from './Pages/booking';

test('Renders the BookingForm heading', () => {
  render(<Booking />);
  const headingElement = screen.getByText("Reserve a table");
  expect(headingElement).toBeInTheDocument();
})