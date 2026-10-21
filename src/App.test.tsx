import React from 'react';
import { act, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
});

afterEach(() => jest.restoreAllMocks());

test('opens Solutions with the requested hero and no breadcrumb', () => {
  render(<App />);
  const nav = within(screen.getByRole('navigation', { name: 'Primary navigation' }));
  fireEvent.click(nav.getByRole('link', { name: 'Solutions' }));
  expect(window.location.pathname).toBe('/solutions');
  expect(document.title).toBe('Solutions | Nexbyte');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Technology solutions for every stage of growth.');
  expect(screen.getByRole('complementary', { name: 'Where most clients start' })).toHaveTextContent('Business Automation');
  expect(screen.getByRole('region', { name: 'Nexbyte solutions at a glance' })).toHaveTextContent('90 days');
  expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Talk to a solution lead/ })).toHaveAttribute('href', '/contact');
});

test('opens Company from the navbar and shows the company content', () => {
  render(<App />);
  const nav = within(screen.getByRole('navigation', { name: 'Primary navigation' }));
  fireEvent.click(nav.getByRole('link', { name: 'Company' }));
  expect(window.location.pathname).toBe('/company');
  expect(document.title).toBe('Company | Nexbyte');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Technology with purpose.');
  expect(screen.getByRole('img', { name: 'Nexbyte Technologies office lounge' })).toBeInTheDocument();
  expect(nav.getByRole('link', { name: 'Company' })).toHaveAttribute('aria-current', 'page');
});

test('uses clean browser URLs and responds to browser back and forward', async () => {
  window.history.replaceState(null, '', '/service');
  render(<App />);
  expect(document.title).toBe('Service | Nexbyte');
  const nav = within(screen.getByRole('navigation', { name: 'Primary navigation' }));
  fireEvent.click(nav.getByRole('link', { name: 'About' }));
  expect(window.location.pathname).toBe('/about');
  expect(window.location.hash).toBe('');
  expect(document.title).toBe('About | Nexbyte');
  await act(async () => { window.history.back(); });
  await waitFor(() => expect(document.title).toBe('Service | Nexbyte'));
  expect(window.location.pathname).toBe('/service');
  await act(async () => { window.history.forward(); });
  await waitFor(() => expect(document.title).toBe('About | Nexbyte'));
  expect(window.location.hash).toBe('');
});

test('opens industries and switches the dashboard between sectors', () => {
  window.history.replaceState(null, '', '/industries');
  render(<App />);
  expect(document.title).toBe('Industries | Nexbyte');
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Software shaped');
  expect(screen.getByRole('button', { name: 'E-commerce' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('region', { name: 'E-commerce dashboard preview' })).toHaveTextContent('courier booking');
  fireEvent.click(screen.getByRole('button', { name: 'Healthcare' }));
  expect(screen.getByRole('button', { name: 'Healthcare' })).toHaveAttribute('aria-pressed', 'true');
  expect(screen.getByRole('button', { name: 'E-commerce' })).toHaveAttribute('aria-pressed', 'false');
  expect(screen.getByRole('region', { name: 'Healthcare dashboard preview' })).toHaveTextContent('patient records');
  expect(screen.getByRole('link', { name: /Talk to an industry lead/ })).toHaveAttribute('href', '/contact');
  const firstQuestion = screen.getByRole('button', { name: 'Do you only build for these ten industries?' });
  expect(firstQuestion).toHaveAttribute('aria-expanded', 'true');
  const regulations = screen.getByRole('button', { name: 'Can you work with industry regulations?' });
  fireEvent.click(regulations);
  expect(regulations).toHaveAttribute('aria-expanded', 'true');
  expect(firstQuestion).toHaveAttribute('aria-expanded', 'false');
  expect(screen.getByRole('region', { name: 'Can you work with industry regulations?' })).toBeVisible();
  fireEvent.click(regulations);
  expect(regulations).toHaveAttribute('aria-expanded', 'false');
});

test('shows product details on hover and focus and dismisses them on exit', () => {
  render(<App />);
  const callCenter = screen.getByRole('link', { name: 'Explore Call Center' });
  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  fireEvent.mouseEnter(callCenter);
  expect(screen.getByRole('tooltip')).toHaveTextContent('Cloud PBX, IVR, call queues');
  fireEvent.mouseLeave(callCenter);
  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  const erp = screen.getByRole('link', { name: 'Explore ERP' });
  fireEvent.focus(erp);
  expect(screen.getByRole('tooltip')).toHaveTextContent('Connect finance, inventory');
  fireEvent.keyDown(erp, { key: 'Escape' });
  expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
});

test('renders the Nexbyte home page and only the requested navigation pages', () => {
  render(<App />);
  const navigation = within(screen.getByRole('navigation', { name: 'Primary navigation' }));
  expect(navigation.getByRole('link', { name: /nexbyte/i })).toBeInTheDocument();
  expect(navigation.getAllByRole('link').slice(1).map((link) => link.textContent?.trim())).toEqual([
    'Home',
    'About',
    'Solutions',
    'Service',
    'Industries',
    'Company',
    'Contact',
    'Request Demo',
  ]);
  expect(screen.getByRole('heading', { name: /building technology for the businesses of tomorrow/i })).toBeInTheDocument();
  const ecosystem = screen.getByRole('group', {
    name: /product ecosystem connecting six software products/i,
  });
  expect(ecosystem.querySelectorAll('animateTransform')).toHaveLength(7);
  expect(ecosystem.querySelector('animateTransform[to="-360 260 250"]')).toBeInTheDocument();
  expect(ecosystem.querySelectorAll('animateTransform[to="360 0 0"]')).toHaveLength(6);
  expect(screen.getByRole('region', { name: 'Nexbyte at a glance' })).toBeInTheDocument();
  expect(screen.getByText('120+')).toBeInTheDocument();
  const trustedTeams = screen.getByRole('region', { name: 'Teams across industries' });
  expect(trustedTeams).toHaveTextContent(
    'Trusted by teams across telecom, finance, healthcare and retail'
  );
  expect(trustedTeams.querySelectorAll('.trusted-teams-group')).toHaveLength(2);
  expect(trustedTeams.querySelectorAll('.trusted-team')).toHaveLength(12);
  const technologyStack = screen.getByRole('region', { name: 'The stack behind our products' });
  expect(technologyStack).toHaveTextContent('The stack behind our products');
  expect(technologyStack.querySelectorAll('.technology-layer')).toHaveLength(5);
  expect(technologyStack.querySelector('.technology-layer-active')).toHaveTextContent('Backend');
  fireEvent.mouseEnter(within(technologyStack).getByRole('group', { name: 'Data layer' }));
  expect(technologyStack.querySelector('.technology-layer-active')).toHaveTextContent('Data');
  expect(screen.getByRole('region', { name: 'Example request trace' })).toHaveTextContent('SELECT subscribers');
  fireEvent.mouseEnter(within(technologyStack).getByRole('group', { name: 'Frontend layer' }));
  expect(technologyStack.querySelectorAll('.technology-layer-active')).toHaveLength(1);
  expect(technologyStack.querySelector('.technology-layer-active')).toHaveTextContent('Frontend');
  fireEvent.mouseLeave(within(technologyStack).getByRole('group', { name: 'Frontend layer' }));
  expect(technologyStack.querySelector('.technology-layer-active')).toHaveTextContent('Backend');
  expect(trustedTeams.compareDocumentPosition(technologyStack) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  expect(screen.getByRole('region', { name: 'Example request trace' })).toHaveTextContent(
    'POST /api/v1/invoices'
  );
  expect(screen.getByRole('contentinfo')).toHaveTextContent('All rights reserved.');
  expect(screen.getByRole('link', { name: /back to top/i })).toBeInTheDocument();
  expect(screen.queryByRole('navigation', { name: 'Footer navigation' })).not.toBeInTheDocument();
  expect(screen.queryByText('Let’s build something useful.')).not.toBeInTheDocument();
});

test('opens separate pages through routes and supports direct page entry', () => {
  window.history.replaceState(null, '', '/about');
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'The technology group behind tomorrow’s businesses.'
  );
  expect(screen.getByRole('img', { name: 'Nexbyte team working in the office' })).toBeInTheDocument();
  expect(screen.queryByRole('complementary', { name: 'Company facts' })).not.toBeInTheDocument();
  expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Technology for the way businesses grow.' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Products' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Solutions' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Engineering' })).toBeInTheDocument();
  const primaryNavigation = within(
    screen.getByRole('navigation', { name: 'Primary navigation' })
  );
  expect(primaryNavigation.getByRole('link', { name: 'About' })).toHaveAttribute('aria-current', 'page');
  expect(primaryNavigation.getByRole('link', { name: 'Service' })).toHaveAttribute('href', '/service');

  fireEvent.click(primaryNavigation.getByRole('link', { name: 'Service' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Software engineering, from first sketch to long-term support.'
  );
  expect(screen.getByRole('complementary', { name: 'Most requested services' })).toBeInTheDocument();
  expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument();
  expect(screen.getByRole('region', { name: 'All software services' }).querySelectorAll('article')).toHaveLength(12);
  expect(screen.getByRole('heading', { name: 'Custom Software Development' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Not sure which service fits?' })).toBeInTheDocument();
  expect(document.title).toBe('Service | Nexbyte');

  fireEvent.click(primaryNavigation.getByRole('link', { name: 'Contact' }));
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
    'Have a project in mind?Let’s make it happen.'
  );
  expect(screen.getByRole('contentinfo')).toHaveTextContent('All rights reserved.');
  expect(screen.queryByRole('navigation', { name: 'Breadcrumb' })).not.toBeInTheDocument();
  expect(screen.queryByText('LET’S TALK')).not.toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Tell us about your project' })).toBeInTheDocument();
  expect(screen.getByLabelText(/Your name/)).toBeRequired();
  expect(screen.getByLabelText(/Work email/)).toHaveAttribute('type', 'email');
  expect(screen.getByLabelText(/What can we help with/)).toBeRequired();
  expect(screen.getByRole('button', { name: /prepare project brief/i })).toBeInTheDocument();

  window.history.pushState(null, '', '/missing');
  fireEvent(window, new PopStateEvent('popstate'));
  expect(screen.getByRole('heading', { name: 'Page not found.' })).toBeInTheDocument();
});
