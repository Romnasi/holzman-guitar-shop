import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CatalogPage from '../catalog-page/catalog-page';
import NotFoundPage from '../not-found-page/not-found-page';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/catalog">
          <CatalogPage />
        </Route>

        <Route exact path="/catalog/:paginationNumber">
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
