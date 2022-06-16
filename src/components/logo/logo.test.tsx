import {render, screen} from '@testing-library/react';
import {Router, Switch, Route} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import Logo from './logo';
import userEvent from '@testing-library/user-event';
import { LogoType } from '../../const/nav';

const history = createMemoryHistory();

describe('Component: Logo', () => {
  it('should render correctly for Header', () => {
    render(
      <Router history={history}>
        <Logo type={LogoType.HEADER} />
      </Router>);

    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should render correctly for Footer', () => {
    render(
      <Router history={history}>
        <Logo type={LogoType.FOOTER} />
      </Router>);

    expect(screen.getByAltText(/Логотип/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect to root url when user clicked to link', () => {
    history.push('/fake');
    render(
      <Router history={history}>
        <Switch>
          <Route path="/" exact>
            <h1>This is main page</h1>
          </Route>
          <Route>
            <Logo type={LogoType.FOOTER} />
          </Route>
        </Switch>
      </Router>);

    expect(screen.queryByText(/This is main page/i)).not.toBeInTheDocument();
    userEvent.click(screen.getByRole('link'));
    expect(screen.getByText(/This is main page/i)).toBeInTheDocument();
  });
});
