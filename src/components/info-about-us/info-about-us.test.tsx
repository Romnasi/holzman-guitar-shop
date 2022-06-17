import { render, screen } from '@testing-library/react';
import InfoAboutUs from './info-about-us';

describe('Component: InfoAboutUs', () => {
  it('should render correctly', () => {
    render(<InfoAboutUs />);

    expect(screen.getByText('О нас')).toBeInTheDocument();
    expect(screen.getByText(/Магазин гитар, музыкальных инструментов и гитарная мастерская/i)).toBeInTheDocument();
  });
});
