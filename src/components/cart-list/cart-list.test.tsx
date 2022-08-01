import { render, screen, within } from '@testing-library/react';
import CartList from './cart-list';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockGuitars } from '../../const/mock';

const mockStore = configureMockStore();

const firstMockGuitar = mockGuitars[0];
const secondMockGuitar = mockGuitars[1];

const storeWithGuitars = mockStore({
  CART: {
    guitars: [firstMockGuitar, secondMockGuitar],
    counter: {},
    coupon: '',
    discount: 0,
    couponStatus: null,
  },
});

const storeWithoutGuitars = mockStore({
  CART: {
    guitars: [],
    counter: {},
    coupon: '',
    discount: 0,
    couponStatus: null,
  },
});


const history = createMemoryHistory();

describe('Component: CartList', () => {
  it('should render correctly', () => {
    render(
      <Provider store={storeWithGuitars}>
        <Router history={history}>
          <CartList />
        </Router>
      </Provider>);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('cart-list');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(2);
  });

  it('should render a message instead of a list when the repository is empty', () => {
    render(
      <Provider store={storeWithoutGuitars}>
        <Router history={history}>
          <CartList />
        </Router>
      </Provider>);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByText('Корзина пуста, добавьте товар')).toBeInTheDocument();
  });
});
