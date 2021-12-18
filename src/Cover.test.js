import { render, screen } from '@testing-library/react';
import Cover from './Cover';

//======Checks to see if Dashboard tag is showing using text search=====\\
test('renders logo photo/link', () => {
    render(<Cover />);
    const spanElement = screen.getByTitle(/logo/i);
    expect(spanElement).toBeInTheDocument();
  });

  test('renders Home button', () => {
    render(<Cover />);
    const spanElement = screen.getByText(/Home/i);
    expect(spanElement).toBeInTheDocument();
  });

  test('renders Read more button', () => {
    render(<Cover />);
    const spanElement = screen.getByText(/Read more/i);
    expect(spanElement).toBeInTheDocument();
  });