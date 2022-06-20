import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import NotFoundPage from './not-found-page';

describe('Component: NotFoundScreen', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <NotFoundPage />
      </Router>,
    );

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(screen.getByText('Извините страница не найдена')).toBeInTheDocument();
    expect(screen.getByText('Перейти на страницу каталога')).toBeInTheDocument();
  });
});
