import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import ReviewCounter from './review-counter';
import { mockGuitars, mockComments } from '../../const/mock';

const mockStore = configureMockStore();

const store = mockStore({
  DATA: {
    comments: mockComments,
  },
});

const someGuitarData = mockGuitars[0];
const someGuitarId = someGuitarData.id;
const curComments = mockComments.filter(({guitarId}) => guitarId === someGuitarId);

const fakeApp = (
  <Provider store={store}>
    <ReviewCounter guitarId={someGuitarId} />
  </Provider>
);

describe('Component: ProductCounter', () => {
  it('should render correctly', () => {
    render(fakeApp);

    const commentsNumber = curComments.length;

    expect(screen.getByText(/Всего оценок/i)).toBeInTheDocument();
    expect(screen.getByText(commentsNumber)).toBeInTheDocument();
  });
});
