function Socials(): JSX.Element {
  return(
    <div className="socials footer__socials">
      <ul className="socials__list">
        <li className="socials-item">
          <a className="socials__link" href="https://www.skype.com/" aria-label="skype">
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon-skype"></use>
            </svg>
          </a>
        </li>
        <li className="socials-item">
          <a className="socials__link" href="https://www.vsco.com/" aria-label="vsco">
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon-vsco"></use>
            </svg>
          </a>
        </li>
        <li className="socials-item">
          <a className="socials__link" href="https://www.pinterest.com/" aria-label="pinterest">
            <svg className="socials__icon" width="24" height="24" aria-hidden="true">
              <use xlinkHref="#icon-pinterest"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
