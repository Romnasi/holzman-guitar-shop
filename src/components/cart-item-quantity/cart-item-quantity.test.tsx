import { render, screen } from '@testing-library/react';
import CartItemQuantity from './cart-item-quantity';
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

const fakeFunc = jest.fn();

describe('Component: CartItemQuantity', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartItemQuantity id={1} handleModalOpen={fakeFunc} />
        </Router>
      </Provider>);


    expect(screen.getByLabelText('Уменьшить количество')).toBeInTheDocument();
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
    expect(screen.getByLabelText('Увеличить количество')).toBeInTheDocument();
  });

  it('should set the value when it is set in the store', () => {
    const storeWithCounter = mockStore({
      CART: {
        guitars: [],
        counter: {'1': 33},
        coupon: '',
        discount: 0,
        couponStatus: null,
      },
    });

    render(
      <Provider store={storeWithCounter}>
        <Router history={history}>
          <CartItemQuantity id={1} handleModalOpen={fakeFunc} />
        </Router>
      </Provider>);


    expect(screen.getByLabelText('Уменьшить количество')).toBeInTheDocument();
    expect(screen.getByLabelText('Увеличить количество')).toBeInTheDocument();
    const input = screen.getByRole('spinbutton') as HTMLInputElement;
    expect(input.value).toEqual('33');
  });
});
