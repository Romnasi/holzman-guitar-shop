import { render, screen, within } from '@testing-library/react';
import { mockGuitars, mockComments } from '../../const/mock';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {createMemoryHistory} from 'history';
import Nav from './nav';
import { navData } from '../../const/nav';
import { AppRoute } from '../../const/app-route';
import userEvent from '@testing-library/user-event';

const mockStore = configureMockStore();
const history = createMemoryHistory();

const store = mockStore({
  DATA: {
    isDataLoaded: true,
    isCommentsLoaded: true,
    guitars: mockGuitars,
    comments: mockComments,
    curPagination: 1,
    guitarNumber: 3,
    curGuitar: null,
  },
});

describe('Component: Nav', () => {
  it('should render list of links', () => {
    render(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>);

    const list = screen.getByRole('list');
    expect(list).toHaveClass('main-nav__list');
    const { getAllByRole } = within(list);

    const items = getAllByRole('listitem');
    expect(items.length).toBe(navData.length);

    const linkItems = getAllByRole('link');
    expect(linkItems.length).toBe(navData.length);
  });

  it('should redirect to catalog page when user clicked to nav link', () => {
    history.push(AppRoute.MAIN);
    render(
      <Router history={history}>
        <Switch>
          <Route path={AppRoute.MAIN} exact>
            <Nav />
          </Route>
          <Route path={AppRoute.CATALOG}>
            <h1>This is catalog page</h1>
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is catalog page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText('Каталог'));
    expect(screen.getByText(/This is catalog page/i)).toBeInTheDocument();
  });
});
