import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import Logo from '../logo/logo';
import { LogoType } from '../../const/nav';
import Nav from '../nav/nav';
import SearchBar from '../search-bar/search-bar';

function Header(): JSX.Element {
  return (
    <header className="header" id="header">
      <div className="container header__wrapper">
        <Logo type={LogoType.HEADER} />

        <Nav />

        <SearchBar />

        <Link className="header__cart-link" to={AppRoute.CART} aria-label="Корзина">
          <svg className="header__cart-icon" width="14" height="14" aria-hidden="true">
            <use xlinkHref="#icon-basket"></use>
          </svg>
          <span className="visually-hidden">Перейти в корзину</span>
          <span className="header__cart-count">2</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
