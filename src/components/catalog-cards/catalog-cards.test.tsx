import { render, screen, within } from '@testing-library/react';
import { mockGuitars, mockComments } from '../../const/mock';
import CatalogCards from './catalog-cards';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const cardData = mockGuitars.slice(0, 2);

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: cardData,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
  },
});

describe('Component: CatalogCards', () => {
  it('should render list of 2 cards', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <CatalogCards />
        </Router>
      </Provider>);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('cards catalog__cards');
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(cardData.length);
  });
});
