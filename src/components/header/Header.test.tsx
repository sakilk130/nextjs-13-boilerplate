import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Header Component', () => {
  it('renders the logo and navigation links', () => {
    render(<Header />);

    // Check if the logo is rendered
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();

    // Check if the navigation links are rendered
    const homeLink = screen.getByText('Home');
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByText('About');
    expect(aboutLink).toBeInTheDocument();
  });
});
