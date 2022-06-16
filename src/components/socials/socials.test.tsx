import { render, screen, within } from '@testing-library/react';
import Socials from './socials';

describe('Component: Socials', () => {
  it('should render list of 3 socials link', () => {
    render(<Socials />);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('socials__list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    const linkItems = getAllByRole('link');
    expect(items.length).toBe(3);
    expect(linkItems.length).toBe(3);
  });
});
