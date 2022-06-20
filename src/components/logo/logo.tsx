import { Link } from 'react-router-dom';
import { AppRoute } from '../../const/app-route';
import { LogoComponent } from '../../types/logo';
import { LogoType } from '../../const/nav';

function Logo({type = LogoType.HEADER}: LogoComponent): JSX.Element {
  const htmlClass = type === LogoType.FOOTER ? 'footer__logo logo'  : 'header__logo logo';
  return(
    <Link className={htmlClass} to={AppRoute.MAIN}>
      <img
        className="logo__img"
        width="70" height="70"
        src="./img/svg/logo.svg"
        alt="Логотип"
      />
    </Link>
  );
}

export default Logo;
