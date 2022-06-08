import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatalogPage from '../catalog-page/catalog-page';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const/app-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={AppRoute.CATALOG}>
          <CatalogPage />
        </Route>

        <Route path={AppRoute.CATALOG_PAGINATION}>
          <CatalogPage />
        </Route>

        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
