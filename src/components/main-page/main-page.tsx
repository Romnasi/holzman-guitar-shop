import Header from '../header/header';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';

function MainPage(): JSX.Element {
  return(
    <div className="wrapper">
      <Header/>

      <main className="page-content">
        <div className="container">
          <h1>Главная</h1>
          <ol>
            <li><Link to={AppRoute.CATALOG}>Каталог</Link></li>
          </ol>
        </div>
      </main>

      <Footer/>
    </div>
  );
}

export default MainPage;
