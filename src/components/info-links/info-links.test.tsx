import { render, screen, within } from '@testing-library/react';
import InfoLinks from './info-links';

describe('Component: InfoLinks', () => {
  it('should render correctly', () => {
    render(<InfoLinks />);

    expect(screen.getByText('Информация')).toBeInTheDocument();
    const list = screen.getByRole('list');
    expect(list).toHaveClass('footer__nav-list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(5);
  });
});
