import Logo from '../logo/logo';
import { LogoType } from '../../const/nav';
import Socials from '../socials/socials';
import InfoAboutUs from '../info-about-us/info-about-us';
import InfoLinks from '../info-links/info-links';
import Contacts from '../contacts/contacts';

function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <Logo type={LogoType.FOOTER} />
        <Socials />
        <InfoAboutUs />
        <InfoLinks />
        <Contacts />
      </div>
    </footer>
  );
}

export default Footer;
