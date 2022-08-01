import { render, screen, within } from '@testing-library/react';
import CartItem from './cart-item';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockGuitars } from '../../const/mock';
import { getCartName } from '../../utils/cart';
import { GuitarType } from '../../const/modal';
import { GuitarTypes } from '../../types/card-data';

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

const mockGuitar = mockGuitars[0];
const history = createMemoryHistory();

describe('Component: CartItem', () => {
  it('should render correctly', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CartItem {...mockGuitar} />
        </Router>
      </Provider>);


    const itemInfo = screen.getByTestId('item-info');
    const description = `${GuitarType[mockGuitar.type as keyof GuitarTypes]}, ${mockGuitar.stringCount} струнная`;
    const { getByText } = within(itemInfo);

    expect(screen.getByAltText(getCartName(mockGuitar.type, mockGuitar.name))).toBeInTheDocument();
    expect(getByText(`Артикул: ${mockGuitar.vendorCode}`)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });
});
