
import { useSelector } from 'react-redux';
// import { useDispatch, useSelector } from 'react-redux';
import { getGuitars } from '../../store/catalog-data/selectors';
import FilterPrice from '../filter-price/filter-price';
import FilterType from '../../filter-type/filter-type';
import FilterStrings from '../filter-strings/filter-strings';
import { useLocation, useHistory } from 'react-router-dom';
// import { useMemo, useEffect, useCallback } from 'react';
import { useMemo } from 'react';
import { FilterQueryKey } from '../../const/filter';


function CatalogFilter(): JSX.Element {
  const guitars = useSelector(getGuitars);
  // const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  // const handleFilterChange = useCallback((update: SortStateUpdate) => {
  //   const sortState = {...sortType, ...update, isActive: true};
  //   dispatch(changeSortType(sortState));
  // }, []);

  const updateQueryValue = (key: FilterQueryKey, value: string | number) => {
    searchParams.delete(key);
    searchParams.append(key, value.toString());
    history.push(`?${searchParams.toString()}`);
  };

  const addNewQuery = (key: FilterQueryKey, value: string | number) => {
    history.push(`?${searchParams.toString()}&${key}=${value}`);
  };

  const createQuery = (key: FilterQueryKey, value: string | number) => history.push(`?${key}=${value}`);

  const setFilterQuery = (key: FilterQueryKey, value: string | number): void => {
    if (search) {
      const prevValue = searchParams.get(key);
      if (prevValue) {
        updateQueryValue(key, value);
      } else {
        addNewQuery(key, value);
      }
    } else {
      createQuery(key, value);
    }
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>

      <FilterPrice
        guitars={guitars}
        setFilterQuery={setFilterQuery}
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
