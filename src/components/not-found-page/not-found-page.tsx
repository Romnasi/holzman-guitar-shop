import './not_found-page.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import PageTemplate from '../../hocs/page-template';

function NotFoundPage(): JSX.Element {
  return(
    <PageTemplate hasData={false}>
      <main className='page-content'>
        <div className='container not-found'>
          <h1 className="glitch" data-text="404">
            404
          </h1>
          <p className="glitch glitch--sub" data-text="Извините страница не найдена">
            Извините страница не найдена
          </p>
          <Link className="button button--red not-found__button" to={AppRoute.CATALOG}>
            Перейти на страницу каталога
          </Link>
        </div>
      </main>
    </PageTemplate>
  );
}

export default NotFoundPage;
