import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatalogPage from '../catalog-page/catalog-page';
import NotFoundPage from '../not-found-page/not-found-page';
import { AppRoute } from '../../const/app-route';
import MainPage from '../main-page/main-page';
import ProductPage from '../product-page/product-page';

function App(): JSX.Element {
  return (
    <Switch>
      <Route exact path={AppRoute.MAIN}>
        <MainPage />
      </Route>

      <Route exact path={AppRoute.CATALOG}>
        <CatalogPage />
      </Route>

      <Route exact path={AppRoute.CATALOG_PAGINATION}>
        <CatalogPage />
      </Route>

      <Route exact path={AppRoute.PRODUCT}>
        <ProductPage />
      </Route>

      <Route path="*">
        <NotFoundPage />
      </Route>
    </Switch>
  );
}

export default App;
