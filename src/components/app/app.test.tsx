import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { Provider } from 'react-redux';
import { configureMockStore } from '@jedmao/redux-mock-store';
import { AppRoute } from '../../const/app-route';
import App from './app';
import { mockGuitars, mockComments } from '../../const/mock';

const mockStore = configureMockStore();

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

const someGuitarData = mockGuitars[0];
const someGuitarId = mockGuitars[0].vendorCode;

const history = createMemoryHistory();
const fakeApp = (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

describe('Application Routing', () => {
  it('should render "MainPage" when user navigate to "/"', () => {
    history.push(AppRoute.MAIN);
    render(fakeApp);

    expect(screen.getByText(/Главная/i)).toBeInTheDocument();
  });

  it('should render "Catalog page" when user navigate to "/catalog"', () => {
    history.push(AppRoute.CATALOG);
    render(fakeApp);

    expect(screen.getByText(/Каталог гитар/i)).toBeInTheDocument();
    expect(screen.getByText(/Фильтр/i)).toBeInTheDocument();
    expect(screen.getByText(/Сортировать/i)).toBeInTheDocument();
  });

  it('should render "NotFoundPage" when user navigate to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Извините страница не найдена')).toBeInTheDocument();
    expect(screen.getByText('Перейти на страницу каталога')).toBeInTheDocument();
  });

  it('should render "ProductPage" when user navigate to /products/:id route', () => {
    const intersectionObserverMock = () => ({
      observe: () => null,
    });
    window.IntersectionObserver = jest.fn().mockImplementation(intersectionObserverMock);
    history.push(`/products/${someGuitarId}`);
    render(fakeApp);
    expect(screen.queryByText(/Загрузка/i)).not.toBeInTheDocument();
    const title = screen.getByRole('heading', { level: 1 });
    expect(title).toHaveTextContent(someGuitarData.name);
  });
});
