import { Link, useLocation } from 'react-router-dom';
import { navData } from '../../const/nav';

function Nav(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        {navData.map(({ id, linkName, path }) => {
          const linkClass = pathname === path ? 'link main-nav__link link--current' : 'link main-nav__link';
          return (
            <li key={id}>
              <Link className={linkClass} to={path}>
                {linkName}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav;
