import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import CatalogCards from '../catalog-cards/catalog-cards';
import CatalogFilter from '../catalog-filter/catalog-filter';
import CatalogSort from '../catalog-sort/catalog-sort';
import Pagination from '../pagination/pagination';

function CatalogMain(): JSX.Element {
  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
        <Breadcrumbs />
        <div className="catalog">
          <CatalogFilter />
          <CatalogSort />
          <CatalogCards />
          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default CatalogMain;
