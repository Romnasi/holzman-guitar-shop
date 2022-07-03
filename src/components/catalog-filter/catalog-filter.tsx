
import { useSelector } from 'react-redux';
import { getGuitars } from '../../store/catalog-data/selectors';
import FilterPrice from '../filter-price/filter-price';
import FilterType from '../../filter-type/filter-type';
import FilterStrings from '../filter-strings/filter-strings';

function CatalogFilter(): JSX.Element {
  const guitars = useSelector(getGuitars);

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>

      <FilterPrice
        guitars={guitars}
      />

      <FilterType />

      <FilterStrings />

      <button
        className="catalog-filter__reset-btn button button--black-border button--medium"
        type="reset"
      >
        Очистить
      </button>
    </form>
  );
}

export default CatalogFilter;
