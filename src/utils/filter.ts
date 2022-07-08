import { GuitarsData } from '../types/card-data';
import { GuitarType, Strings, FilterData, FilterMap } from '../types/filter';
import { FilterQueryKey } from '../const/filter';

export const getMinMaxPrice = (guitars: GuitarsData) => {
  const prices = guitars.map(({price}) => price);
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return [min, max];
};

const getGuitarTypeMap = (guitarType: GuitarType): FilterMap => ({
  [FilterQueryKey.ACOUSTIC]: guitarType.acoustic,
  [FilterQueryKey.ELECTRIC]: guitarType.electric,
  [FilterQueryKey.UKULELE]: guitarType.ukulele,
});

const getGuitarStringsMap = (strings: Strings): FilterMap => ({
  [FilterQueryKey.FOUR_STRINGS]: strings.fourStrings,
  [FilterQueryKey.SIX_STRINGS]: strings.sixStrings,
  [FilterQueryKey.SEVEN_STRINGS]: strings.sevenStrings,
  [FilterQueryKey.TWELVE_STRINGS]: strings.twelveStrings,
});

const getFilterStringsKey = (stringCount: number) => {
  switch (stringCount) {
    case 4:
      return FilterQueryKey.FOUR_STRINGS;
    case 6:
      return FilterQueryKey.SIX_STRINGS;
    case 7:
      return FilterQueryKey.SEVEN_STRINGS;
    case 12:
      return FilterQueryKey.TWELVE_STRINGS;
    default:
      return false;
  }
};

const checkStrings = (stringCount: number, strings: Strings) => {
  const key = getFilterStringsKey(stringCount);
  if (!key) {
    return false;
  }
  return getGuitarStringsMap(strings)[key];
};


export const getFilteredGuitars = (sortedGuitars: GuitarsData, filterState: FilterData) => {
  const { isActive, priceMin, priceMax, guitarType, strings } = filterState;
  const { acoustic, electric, ukulele } = guitarType;
  const { fourStrings, sixStrings, sevenStrings, twelveStrings } = strings;
  const guitarTypeFilterMap = getGuitarTypeMap(guitarType);

  if (!isActive) {
    return sortedGuitars;
  }
  let filteredGuitars = sortedGuitars.slice();

  if (priceMin !== '') {
    filteredGuitars = filteredGuitars.filter(({price}) => price >= priceMin);
  }

  if (priceMax !== '') {
    filteredGuitars = filteredGuitars.filter(({price}) => price <= priceMax);
  }

  if (acoustic || electric || ukulele) {
    filteredGuitars = filteredGuitars.filter(({type}) => guitarTypeFilterMap[type]);
  }

  if (fourStrings || sixStrings || sevenStrings || twelveStrings) {
    filteredGuitars = filteredGuitars.filter(({stringCount}) => checkStrings(stringCount, strings));
  }

  return filteredGuitars;
};

export const getDefaultDisabledState = () => ({
  fourStrings: false,
  sixStrings: false,
  sevenStrings: false,
  twelveStrings: false,
});
