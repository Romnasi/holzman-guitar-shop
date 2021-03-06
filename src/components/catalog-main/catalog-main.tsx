import { catalogBreadcrumbs } from '../../const/breadcrumbs';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CatalogCards from '../catalog-cards/catalog-cards';
import CatalogFilter from '../catalog-filter/catalog-filter';
import CatalogSort from '../catalog-sort/catalog-sort';
import Pagination from '../pagination/pagination';
import PageTemplate from '../../hocs/page-template';

function CatalogMain(): JSX.Element {
  return (
    <PageTemplate>
      <main className="page-content">
        <div className="container">
          <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
          <Breadcrumbs crumbs={catalogBreadcrumbs}  />
          <div className="catalog">
            <CatalogFilter />
            <CatalogSort />
            <CatalogCards />
            <Pagination />
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}

export default CatalogMain;
