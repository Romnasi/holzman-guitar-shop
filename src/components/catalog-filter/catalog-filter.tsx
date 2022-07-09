import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGuitars } from '../../store/catalog-data/selectors';
import FilterPrice from '../filter-price/filter-price';
import FilterType from '../../filter-type/filter-type';
import FilterStrings from '../filter-strings/filter-strings';
import { useHistory } from 'react-router-dom';
import { FilterQueryKey } from '../../const/filter';
import { debounce } from 'lodash';
import { getFilterState } from '../../store/filter-data/selectors';
import { AppRoute } from '../../const/app-route';
import useQuery from '../../hooks/use-query';
import {
  changeFilterStatus,
  changePriceMax,
  changePriceMin,
  changeFilterType,
  resetFilterState,
  changeFilterStrings
} from '../../store/action';


function CatalogFilter(): JSX.Element {
  const dispatch = useDispatch();
  const guitars = useSelector(getGuitars);
  const filterState = useSelector(getFilterState);
  const history = useHistory();
  const searchParams = useQuery();

  const handleFilterChange = useCallback((key: FilterQueryKey, value: string | number | boolean) => {
    if (!filterState.isActive) {
      dispatch(changeFilterStatus(true));
    }
    switch (key) {
      case FilterQueryKey.PRICE_MIN:
        dispatch(changePriceMin(Number(value)));
        break;
      case FilterQueryKey.PRICE_MAX:
        dispatch(changePriceMax(Number(value)));
        break;
      case FilterQueryKey.ACOUSTIC:
      case FilterQueryKey.ELECTRIC:
      case FilterQueryKey.UKULELE:
        dispatch(changeFilterType({ [key]: value }));
        break;
      case FilterQueryKey.FOUR_STRINGS:
      case FilterQueryKey.SIX_STRINGS:
      case FilterQueryKey.SEVEN_STRINGS:
      case FilterQueryKey.TWELVE_STRINGS:
        dispatch(changeFilterStrings({ [key]: value }));
        break;
      default:
        break;
    }
  }, []);

  const handleFilterChangeDebounced = debounce(handleFilterChange, 1000);

  useEffect(() => {
    const priceMin = searchParams.get(FilterQueryKey.PRICE_MIN);
    const priceMax = searchParams.get(FilterQueryKey.PRICE_MAX);
    const acousticFilter = searchParams.get(FilterQueryKey.ACOUSTIC) === 'true';
    const electricFilter = searchParams.get(FilterQueryKey.ELECTRIC) === 'true';
    const ukuleleFilter = searchParams.get(FilterQueryKey.UKULELE) === 'true';

    const fourStrings = searchParams.get(FilterQueryKey.FOUR_STRINGS) === 'true';
    const sixStrings = searchParams.get(FilterQueryKey.SIX_STRINGS) === 'true';
    const sevenStrings = searchParams.get(FilterQueryKey.SEVEN_STRINGS) === 'true';
    const twelveStrings = searchParams.get(FilterQueryKey.TWELVE_STRINGS) === 'true';

    if (priceMin) {
      handleFilterChange(FilterQueryKey.PRICE_MIN, priceMin);
    }
    if (priceMax) {
      handleFilterChange(FilterQueryKey.PRICE_MAX, priceMax);
    }
    if (acousticFilter) {
      handleFilterChange(FilterQueryKey.ACOUSTIC, acousticFilter);
    }
    if (electricFilter) {
      handleFilterChange(FilterQueryKey.ELECTRIC, electricFilter);
    }
    if (ukuleleFilter) {
      handleFilterChange(FilterQueryKey.UKULELE, ukuleleFilter);
    }
    if (fourStrings) {
      handleFilterChange(FilterQueryKey.FOUR_STRINGS, fourStrings);
    }
    if (sixStrings) {
      handleFilterChange(FilterQueryKey.SIX_STRINGS, sixStrings);
    }
    if (sevenStrings) {
      handleFilterChange(FilterQueryKey.SEVEN_STRINGS, sevenStrings);
    }
    if (twelveStrings) {
      handleFilterChange(FilterQueryKey.TWELVE_STRINGS, twelveStrings);
    }
  }, []);

  useEffect(() => {
    const { guitarType, strings, priceMin, priceMax } = filterState;
    const min = { [FilterQueryKey.PRICE_MIN]: priceMin };
    const max = { [FilterQueryKey.PRICE_MAX]: priceMax };
    const filtersData = Object.entries(
      Object.assign({}, guitarType, strings, min, max));

    const setQuery = (key: string, value: boolean | string | number) => {
      const hasQuery = searchParams.has(key);
      if (hasQuery) {
        if (!value) {
          searchParams.delete(key);
        } else if (typeof value !== 'boolean') {
          searchParams.set(key, value.toString());
        }
      } else {
        if (value) {
          searchParams.append(key, value.toString());
        }
      }
    };

    filtersData.forEach(([key, value]) => setQuery(key, value as string | number | boolean));

    history.replace({
      search: searchParams.toString(),
    });
  }, [filterState]);

  const handleFilterReset = () => {
    history.push(AppRoute.CATALOG);
    dispatch(resetFilterState());
  };

  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>

      <FilterPrice
        guitars={guitars}
        handleFilterChange={handleFilterChangeDebounced}
      />

      <FilterType
        handleFilterChange={handleFilterChange}
      />

      <FilterStrings
        handleFilterChange={handleFilterChange}
      />

      <button
        className="catalog-filter__reset-btn button button--black-border button--medium"
        type="reset"
        onClick={handleFilterReset}
      >
        Очистить
      </button>
    </form>
  );
}

export default CatalogFilter;
