import { render, screen } from '@testing-library/react';
import CartTotal from './cart-total';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { formatter } from '../../utils/catalog-product';

const mockStore = configureMockStore();

const store = mockStore({
  CART: {
    guitars: [],
    counter: {},
    coupon: '',
    discount: 0,
    couponStatus: null,
  },
});

const history = createMemoryHistory();

describe('Component: CartTotal', () => {
  it('should render correctly when cart is empty', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartTotal />
        </Router>
      </Provider>);

    expect(screen.getByText('Всего:')).toBeInTheDocument();
    expect(screen.getAllByText(`${formatter.format(0)} ₽`)[0]).toBeInTheDocument();

    expect(screen.getByText('Скидка:')).toBeInTheDocument();
    expect(screen.getAllByText(`${formatter.format(0)} ₽`)[1]).toBeInTheDocument();

    expect(screen.getByText('К оплате:')).toBeInTheDocument();
    expect(screen.getAllByText(`${formatter.format(0)} ₽`)[2]).toBeInTheDocument();
  });
});
