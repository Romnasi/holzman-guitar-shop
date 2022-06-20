import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockGuitars, mockComments } from '../../const/mock';
import ReviewForm from './review-form';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  DATA: {
    comments: mockComments,
    curGuitar: mockGuitars[0],
  },
});

const someGuitarData = mockGuitars[0];

describe('Component: ReviewForm', () => {
  it('should render correctly', () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
    history.push(`/products/${someGuitarData.vendorCode}`);

    const handleModalClose = jest.fn();
    const handleReviewSubmit = jest.fn();

    render(
      <Provider store={store}>
        <Router history={history}>
          <ReviewForm
            handleModalClose={handleModalClose}
            handleReviewSubmit={handleReviewSubmit}
          />
        </Router>
      </Provider>);

    expect(screen.getByText('Оставить отзыв')).toBeInTheDocument();

    expect(screen.getByLabelText('Ваше Имя')).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name:'Ваше Имя'})).toBeInTheDocument();

    expect(screen.getByText('Ваша Оценка')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(5);

    expect(screen.getByLabelText('Достоинства')).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name:'Достоинства'})).toBeInTheDocument();

    expect(screen.getByLabelText('Недостатки')).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name:'Недостатки'})).toBeInTheDocument();

    expect(screen.getByLabelText('Комментарий')).toBeInTheDocument();
    expect(screen.getByRole('textbox', {name:'Комментарий'})).toBeInTheDocument();

    expect(screen.getByRole('button', {name: /Отправить отзыв/i})).toBeInTheDocument();
  });
});
