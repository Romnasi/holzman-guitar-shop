import { useDispatch, useSelector } from 'react-redux';
import { getSortType } from '../../store/catalog-data/selectors';
import { changeSortType } from '../../store/action';
import { SortDirection, SortName } from '../../const/sort';
import { CatalogSortType } from '../../types/card-data';

const getSortButtonClass = (buttonType: string, sortState: CatalogSortType) => {
  const { type, direction, isActive} = sortState;
  let typeButtonClass = 'catalog-sort__type-button';
  let upOrderButtonClass = 'catalog-sort__order-button catalog-sort__order-button--up';
  let downOrderButtonClass = 'catalog-sort__order-button catalog-sort__order-button--down';
  const activeOrderButtonClass = 'catalog-sort__order-button--active';

  switch (buttonType) {
    case SortName.PRICE:
      typeButtonClass = isActive && type === SortName.PRICE
        ? `${typeButtonClass} ${typeButtonClass}--active`
        : typeButtonClass;
      return typeButtonClass;
    case SortName.COMMENT:
      typeButtonClass = isActive && type === SortName.COMMENT
        ? `${typeButtonClass} ${typeButtonClass}--active`
        : typeButtonClass;
      return typeButtonClass;
    case SortDirection.ASCENDING:
      upOrderButtonClass = isActive && direction === SortDirection.ASCENDING
        ? `${upOrderButtonClass} ${activeOrderButtonClass}`
        : upOrderButtonClass;
      return upOrderButtonClass;
    case SortDirection.DESCENDING:
      downOrderButtonClass = isActive && direction === SortDirection.DESCENDING
        ? `${downOrderButtonClass} ${activeOrderButtonClass}`
        : downOrderButtonClass;
      return downOrderButtonClass;
    default:
      return '';
  }
};

function CatalogSort(): JSX.Element {
  const sortType = useSelector(getSortType);
  const dispatch = useDispatch();

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          onClick={() => {
            const update = { type: SortName.PRICE, isActive: true };
            dispatch(changeSortType({...sortType, ...update}));
          }}
          className={getSortButtonClass(SortName.PRICE, sortType)}
          aria-label="по цене"
        >
          по цене
        </button>
        <button
          onClick={() => {
            const update = { type: SortName.COMMENT, isActive: true };
            dispatch(changeSortType({...sortType, ...update}));
          }}
          className={getSortButtonClass(SortName.COMMENT, sortType)}
          aria-label="по популярности"
        >
          по популярности
        </button>
      </div>

      <div className="catalog-sort__order">
        <button
          onClick={() => {
            const update = { direction: SortDirection.ASCENDING, isActive: true };
            dispatch(changeSortType({...sortType, ...update}));
          }}
          className={getSortButtonClass(SortDirection.ASCENDING, sortType)}
          aria-label="По возрастанию"
        >
        </button>
        <button
          onClick={() => {
            const update = { direction: SortDirection.DESCENDING, isActive: true };
            dispatch(changeSortType({...sortType, ...update}));
          }}
          className={getSortButtonClass(SortDirection.DESCENDING, sortType)}
          aria-label="По убыванию"
        >
        </button>
      </div>
    </div>
  );
}

export default CatalogSort;
