export const enum SortDirection {
  ASCENDING = 'ASCENDING',
  DESCENDING = 'DESCENDING',
}

export const enum SortName {
  PRICE = 'PRICE',
  COMMENT = 'COMMENT',
}

export const defaultSortType = {
  type: SortName.PRICE,
  direction: SortDirection.ASCENDING,
  isActive: false,
};
