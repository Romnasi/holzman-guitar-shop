import { render, screen, within } from '@testing-library/react';
import Breadcrumbs from './breadcrumbs';
import { createMemoryHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import userEvent from '@testing-library/user-event';

export const mockBreadcrumbs = [
  {
    id: 0,
    linkName: 'Главная',
    path: AppRoute.MAIN,
  },
  {
    id: 1,
    linkName: 'Каталог',
    path: AppRoute.CATALOG,
  },
];

const history = createMemoryHistory();

describe('Component: Breadcrumbs', () => {
  it('should render correctly', () => {
    render(
      <Router history={history}>
        <Breadcrumbs crumbs={mockBreadcrumbs} />
      </Router>);

    expect(screen.getByText(mockBreadcrumbs[0].linkName)).toBeInTheDocument();
    expect(screen.getByText(mockBreadcrumbs[1].linkName)).toBeInTheDocument();
    const list = screen.getByRole('list');
    expect(list).toHaveClass('breadcrumbs page-content__breadcrumbs');
    const { getAllByRole } = within(list);
    const items = getAllByRole('link');
    expect(items.length).toBe(mockBreadcrumbs.length);
  });

  it('should redirect to root url when user clicked to breadcrumb item', () => {
    history.push(AppRoute.CATALOG);
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route path={AppRoute.CATALOG}>
            <Breadcrumbs crumbs={mockBreadcrumbs} />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByText(mockBreadcrumbs[0].linkName));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
