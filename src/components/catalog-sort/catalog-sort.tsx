import { useDispatch, useSelector } from 'react-redux';
import { getSortType } from '../../store/catalog-data/selectors';
import { changeSortType } from '../../store/action';
import { SortDirection, SortName, SortQueryKey } from '../../const/sort';
import { getSortButtonClass } from '../../utils/sort';
import { SortStateUpdate } from '../../types/card-data';
import { useLocation, useHistory } from 'react-router-dom';
import { useMemo, useEffect, useCallback } from 'react';

function CatalogSort(): JSX.Element {
  const sortType = useSelector(getSortType);
  const dispatch = useDispatch();
  const history = useHistory();
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);

  const handleSortChange = useCallback((update: SortStateUpdate) => {
    const sortState = {...sortType, ...update, isActive: true};
    dispatch(changeSortType(sortState));
  }, []);

  const setSortQuery = (sortName: SortName, sortOrder: SortDirection) => {
    history.push(`?${SortQueryKey.TYPE}=${sortName}&${SortQueryKey.ORDER}=${sortOrder}`);
  };

  useEffect(() => {
    const sortName = searchParams.get(SortQueryKey.TYPE);
    const sortOrder = searchParams.get(SortQueryKey.ORDER);

    if (sortName && sortOrder) {
      if (sortName === SortName.PRICE && sortOrder === SortDirection.ASCENDING) {
        handleSortChange({type: SortName.PRICE, direction: SortDirection.ASCENDING });
      } else if (sortName === SortName.PRICE && sortOrder === SortDirection.DESCENDING) {
        handleSortChange({type: SortName.PRICE, direction: SortDirection.DESCENDING });
      } else if (sortName === SortName.COMMENT && sortOrder === SortDirection.ASCENDING) {
        handleSortChange({type: SortName.COMMENT, direction: SortDirection.ASCENDING });
      } else {
        handleSortChange({type: SortName.COMMENT, direction: SortDirection.DESCENDING });
      }
    }
  }, [searchParams, handleSortChange]);

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          onClick={() => setSortQuery(SortName.PRICE, sortType.direction)}
          className={getSortButtonClass(SortName.PRICE, sortType)}
          aria-label="по цене"
        >
          по цене
        </button>
        <button
          onClick={() => setSortQuery(SortName.COMMENT, sortType.direction)}
          className={getSortButtonClass(SortName.COMMENT, sortType)}
          aria-label="по популярности"
        >
          по популярности
        </button>
      </div>

      <div className="catalog-sort__order">
        <button
          onClick={() => setSortQuery(sortType.type, SortDirection.ASCENDING)}
          className={getSortButtonClass(SortDirection.ASCENDING, sortType)}
          aria-label="По возрастанию"
        >
        </button>
        <button
          onClick={() => setSortQuery(sortType.type, SortDirection.DESCENDING)}
          className={getSortButtonClass(SortDirection.DESCENDING, sortType)}
          aria-label="По убыванию"
        >
        </button>
      </div>
    </div>
  );
}

export default CatalogSort;
