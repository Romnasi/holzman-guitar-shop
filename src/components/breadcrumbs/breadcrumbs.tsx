import { Link } from 'react-router-dom';
import { CrumbsData } from '../../types/breadcrumbs';

function Breadcrumbs({ crumbs, dynamicLink = null }: CrumbsData): JSX.Element {
  return (
    <ul className="breadcrumbs page-content__breadcrumbs">
      {crumbs.map(({ id, linkName, path }) => (
        <li key={id} className="breadcrumbs__item">
          <Link className="link" to={path}>{linkName}</Link>
        </li>
      ))}

      {dynamicLink &&
        <li key={dynamicLink.id} className="breadcrumbs__item">
          <Link className="link" to={dynamicLink.path}>{dynamicLink.linkName}</Link>
        </li>}
    </ul>
  );
}

export default Breadcrumbs;
