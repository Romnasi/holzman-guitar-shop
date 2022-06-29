import { useDispatch, useSelector } from 'react-redux';
import { getSortType } from '../../store/catalog-data/selectors';
import { changeSortType } from '../../store/action';
import { SortDirection, SortName } from '../../const/sort';
import { getSortButtonClass } from '../../utils/sort';
import { SortStateUpdate } from '../../types/card-data';

function CatalogSort(): JSX.Element {
  const sortType = useSelector(getSortType);
  const dispatch = useDispatch();

  const handleSortButtonClick = (update: SortStateUpdate) => {
    dispatch(changeSortType({...sortType, ...update, isActive: true}));
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          onClick={() => handleSortButtonClick({ type: SortName.PRICE })}
          className={getSortButtonClass(SortName.PRICE, sortType)}
          aria-label="по цене"
        >
          по цене
        </button>
        <button
          onClick={() => handleSortButtonClick({ type: SortName.COMMENT })}
          className={getSortButtonClass(SortName.COMMENT, sortType)}
          aria-label="по популярности"
        >
          по популярности
        </button>
      </div>

      <div className="catalog-sort__order">
        <button
          onClick={() => handleSortButtonClick({ direction: SortDirection.ASCENDING })}
          className={getSortButtonClass(SortDirection.ASCENDING, sortType)}
          aria-label="По возрастанию"
        >
        </button>
        <button
          onClick={() => handleSortButtonClick({ direction: SortDirection.DESCENDING })}
          className={getSortButtonClass(SortDirection.DESCENDING, sortType)}
          aria-label="По убыванию"
        >
        </button>
      </div>
    </div>
  );
}

export default CatalogSort;
