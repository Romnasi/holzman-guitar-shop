import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import PageTemplate from '../../hocs/page-template';

function MainPage(): JSX.Element {
  return(
    <PageTemplate>
      <main className="page-content">
        <div className="container">
          <h1>Главная</h1>
          <ol>
            <li><Link to={AppRoute.CATALOG}>Каталог</Link></li>
          </ol>
        </div>
      </main>
    </PageTemplate>
  );
}

export default MainPage;
