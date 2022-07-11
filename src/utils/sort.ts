import { SortName, SortDirection } from '../const/sort';
import { CatalogSortType, GuitarsData } from '../types/card-data';

const getTypeButtonClass = (
  className: string,
  type: SortName,
  isActive: boolean,
  buttonType: SortName) => {
  className = isActive && type === buttonType
    ? `${className} ${className}--active`
    : className;
  return className;
};

const getOrderButtonClass = (
  className: string,
  direction: SortDirection,
  isActive: boolean,
  buttonType: SortDirection) => {
  const activeOrderButtonClass = 'catalog-sort__order-button--active';
  className = isActive && direction === buttonType
    ? `${className} ${activeOrderButtonClass}`
    : className;
  return className;
};

export const getSortButtonClass = (buttonType: string, sortState: CatalogSortType) => {
  const { type, direction, isActive } = sortState;
  const typeButtonClass = 'catalog-sort__type-button';
  const upOrderButtonClass = 'catalog-sort__order-button catalog-sort__order-button--up';
  const downOrderButtonClass = 'catalog-sort__order-button catalog-sort__order-button--down';

  switch (buttonType) {
    case SortName.PRICE:
      return getTypeButtonClass(typeButtonClass, type, isActive, SortName.PRICE);
    case SortName.COMMENT:
      return getTypeButtonClass(typeButtonClass, type, isActive, SortName.COMMENT);
    case SortDirection.ASCENDING:
      return getOrderButtonClass(upOrderButtonClass, direction, isActive, SortDirection.ASCENDING);
    case SortDirection.DESCENDING:
      return getOrderButtonClass(downOrderButtonClass, direction, isActive, SortDirection.DESCENDING);
    default:
      return '';
  }
};

export const getSortedGuitars = (guitars: GuitarsData, sortType: CatalogSortType) => {
  const { isActive, type, direction } = sortType;

  if (!isActive) {
    return guitars;
  }

  switch (type) {
    case SortName.PRICE:
      if (direction === SortDirection.ASCENDING) {
        return guitars.slice().sort((a, b) => a.price - b.price);
      }
      return guitars.slice().sort((a, b) => b.price - a.price);

    case SortName.COMMENT:
      if (direction === SortDirection.ASCENDING) {
        return guitars.slice().sort((a, b) => a.rating - b.rating);
      }
      return guitars.slice().sort((a, b) => b.rating - a.rating);

    default:
      return guitars;
  }
};
