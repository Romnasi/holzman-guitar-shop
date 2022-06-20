import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { mockGuitars, mockComments } from '../../const/mock';
import Reviews from './reviews';
import { getCurrentSortedReviews } from '../../utils/product';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { ReviewConfig } from '../../const/review';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  DATA: {
    comments: mockComments,
  },
});

const someGuitarData = mockGuitars[0];
const someGuitarId = someGuitarData.id;
const curComments = getCurrentSortedReviews(mockComments, someGuitarId);

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
    history.push(`/products/${someGuitarData.vendorCode}`);
    render(
      <Provider store={store}>
        <Router history={history}>
          <Reviews reviewsData={curComments} />
        </Router>
      </Provider>);


    expect(screen.getByText('Отзывы')).toBeInTheDocument();
    expect(screen.getByTestId('review-btn')).toBeInTheDocument();
    expect(screen.getByTestId('show-more-reviews')).toBeInTheDocument();
    expect(screen.getByText(/Наверх/i)).toBeInTheDocument();
    expect(screen.getAllByRole('article').length).toBe(ReviewConfig.DEFAULT_NUMBER);
  });
});
