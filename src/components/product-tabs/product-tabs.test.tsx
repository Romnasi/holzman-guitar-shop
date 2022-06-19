import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { mockGuitars } from '../../const/mock';
import ProductTabs from './product-tabs';

const history = createMemoryHistory();

const testGuitarData = mockGuitars[0];
const fakeApp = (
  <Router history={history}>
    <ProductTabs
      id={String(testGuitarData.id)}
      type={testGuitarData.type}
      description={testGuitarData.description}
      stringCount={testGuitarData.stringCount}
    />
  </Router>
);

describe('Component: ProductTabs', () => {
  it('should show table and not show description if route "/products/:id"', () => {
    history.push(`products/${testGuitarData.vendorCode}`);
    render(fakeApp);

    expect(screen.getByTestId('dl-characteristics').classList).not.toContain('hidden');
    expect(screen.getByText(testGuitarData.description).classList).toContain('hidden');
  });

  it('should show table and not show description if route "/products/:id#characteristics"', () => {
    history.push(`products/${testGuitarData.vendorCode}#characteristics`);
    render(fakeApp);

    expect(screen.getByTestId('dl-characteristics').classList).not.toContain('hidden');
    expect(screen.getByText(testGuitarData.description).classList).toContain('hidden');
  });

  it('should show description and not show table if route "/products/:id#description"', () => {
    history.push(`products/${testGuitarData.vendorCode}#description`);
    render(fakeApp);

    expect(screen.getByTestId('dl-characteristics').classList).toContain('hidden');
    expect(screen.getByText(testGuitarData.description).classList).not.toContain('hidden');
  });
});
