import { render, screen } from '@testing-library/react';
import ModalSuccessAdd from './modal-success-add';
import userEvent from '@testing-library/user-event';
import { AppRoute } from '../../const/app-route';
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

describe('Component: Modal', () => {
  it('should render correctly', () => {
    const handleModalClose = jest.fn();
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalSuccessAdd
            isHiddenModal={false}
            pageRoute={AppRoute.CART}
            handleModalClose={handleModalClose}
          />
        </Router>
      </Provider>);

    expect(screen.getByText('Товар успешно добавлен в корзину')).toBeInTheDocument();
    expect(screen.getByText('Перейти в корзину')).toBeInTheDocument();
    expect(screen.getByText('Продолжить покупки')).toBeInTheDocument();
  });

  it('should called handleModalClose when user click button "continue shopping"', () => {
    const handleModalClose = jest.fn();
    render(
      <Provider store={store}>
        <Router history={history}>
          <ModalSuccessAdd
            isHiddenModal={false}
            pageRoute={AppRoute.CART}
            handleModalClose={handleModalClose}
          />
        </Router>
      </Provider>);

    userEvent.click(screen.getByText(/Продолжить покупки/i));
    expect(handleModalClose).toBeCalledTimes(1);
  });
});
