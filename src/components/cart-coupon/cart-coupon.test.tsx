import { fireEvent, render, screen } from '@testing-library/react';
import CartCoupon from './cart-coupon';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';

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

describe('Component: CartCoupon', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartCoupon />
        </Router>
      </Provider>);

    expect(screen.getByText('Промокод на скидку')).toBeInTheDocument();
    expect(screen.getByLabelText('Промокод')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Введите промокод')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveTextContent('Применить');
  });

  it('should change the value of the field when the user changes', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartCoupon />
        </Router>
      </Provider>);

    const input = screen.getByPlaceholderText('Введите промокод') as HTMLInputElement;
    fireEvent.change(input, {target: {value: 'test-coupon'}});
    expect(input.value).toBe('test-coupon');
  });
});
