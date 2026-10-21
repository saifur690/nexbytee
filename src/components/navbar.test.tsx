import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Navbar from './navbar';

test('keeps Company without its former dropdown options', () => {
  render(<MemoryRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}><Navbar currentPage="home" /></MemoryRouter>);
  const company = screen.getByRole('link', { name: 'Company' });
  fireEvent.mouseEnter(company);
  expect(company).toHaveAttribute('href', '/company');
  expect(company).not.toHaveAttribute('aria-expanded');
  for (const name of ['About Nexbyte', 'Case Studies', 'Partners', 'Careers']) {
    expect(screen.queryByRole('link', { name })).not.toBeInTheDocument();
  }
});
