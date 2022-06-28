import { GuitarsData } from '../types/card-data';
import { SearchItems } from '../types/search-bar';

export const getSearchItems = (guitars: GuitarsData, searchValue: string): SearchItems => guitars
  .reduce((acc: SearchItems, { id, name, vendorCode }) => {
    const curName = name.toLowerCase();
    if (curName.indexOf(searchValue.toLowerCase()) + 1) {
      acc.push({ id, name, vendorCode });
    }
    return acc;
  }, []);
