export const enum SortDirection {
  ASCENDING = 'ascending',
  DESCENDING = 'descending',
}

export const enum SortName {
  PRICE = 'price',
  COMMENT = 'comment',
}

export const enum SortQueryKey {
  TYPE = 'sort',
  ORDER = 'order',
}

export const defaultSortType = {
  type: SortName.PRICE,
  direction: SortDirection.ASCENDING,
  isActive: false,
};
