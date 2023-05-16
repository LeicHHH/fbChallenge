
import { render, screen } from '@testing-library/react';
import NumberList from './NumberList';

describe('NumberList', () => {
  test('renders the correct strings', () => {
    render(<NumberList />);

    // Assertions
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();

    const falabellaElements = screen.getAllByText('Falabella');
    expect(falabellaElements).toHaveLength(27);

    const itElements = screen.getAllByText('IT');
    expect(itElements).toHaveLength(14);

    const marketplaceElements = screen.getAllByText('Marketplace');
    expect(marketplaceElements).toHaveLength(6);
  });
});
