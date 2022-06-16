import Logo from '../logo/logo';
import { LogoType } from '../../const/nav';
import Socials from '../socials/socials';
import InfoAboutUs from '../info-about-us/info-about-us';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <Logo type={LogoType.FOOTER} />
        <Socials />
        <InfoAboutUs />

        <section className="footer__nav-section footer__nav-section--links">
          <h2 className="footer__nav-title">Информация</h2>
          <ul className="footer__nav-list">
            <li className="footer__nav-list-item">
              <a className="link" href="#top">Где купить?</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="link" href="#top">Блог</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="link" href="#top">Вопрос - ответ</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="link" href="#top">Возврат</a>
            </li>
            <li className="footer__nav-list-item">
              <a className="link" href="#top">Сервис-центры</a>
            </li>
          </ul>
        </section>

        <section className="footer__nav-section footer__nav-section--contacts">
          <h2 className="footer__nav-title">Контакты</h2>
          <p className="footer__nav-content">
            г. Санкт-Петербург,<br/> м. Невский проспект, <br/>ул. Казанская 6.
          </p>
          <div className="footer__nav-content">
            <svg className="footer__icon" width="8" height="8" aria-hidden="true">
              <use xlinkHref="#icon-phone"></use>
            </svg>
            <a className="link" href="tel:88125005050"> 8-812-500-50-50</a>
          </div>
          <p className="footer__nav-content">Режим работы:<br/>
            <span className="footer__span">
              <svg className="footer__icon" width="13" height="13" aria-hidden="true">
                <use xlinkHref="#icon-clock"></use>
              </svg>
              <span> с 11:00 до 20:00</span>
              <span>без выходных</span>
            </span>
          </p>
        </section>

      </div>
    </footer>
  );
}

export default Footer;
