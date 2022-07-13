import { filterData } from './filter-data';
import {
  changePriceMin,
  changePriceMax,
  changeFilterStatus,
  changeFilterType,
  changeFilterStrings,
  resetFilterState,
  changeMinMax
} from '../action';

const initialState = {
  priceMin: '',
  priceMax: '',
  minMax: [0, 0],
  isActive: false,
  guitarType: {
    acoustic: false,
    electric: false,
    ukulele: false,
  },
  strings: {
    fourStrings: false,
    sixStrings: false,
    sevenStrings: false,
    twelveStrings: false,
  },
};

const changedState = {
  priceMin: 1700,
  priceMax: '',
  minMax: [0, 0],
  isActive: false,
  guitarType: {
    acoustic: true,
    electric: false,
    ukulele: false,
  },
  strings: {
    fourStrings: true,
    sixStrings: false,
    sevenStrings: true,
    twelveStrings: false,
  },
};


describe('Reducer: filterData', () => {
  it('without additional parameters should return initial state', () => {
    expect(filterData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should change priceMin', () => {
    expect(filterData(initialState, changePriceMin(100)))
      .toEqual({
        priceMin: 100,
        priceMax: '',
        minMax: [0, 0],
        isActive: false,
        guitarType: {
          acoustic: false,
          electric: false,
          ukulele: false,
        },
        strings: {
          fourStrings: false,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        },
      });
  });

  it('should change priceMax', () => {
    expect(filterData(initialState, changePriceMax(100)))
      .toEqual({
        priceMin: '',
        priceMax: 100,
        minMax: [0, 0],
        isActive: false,
        guitarType: {
          acoustic: false,
          electric: false,
          ukulele: false,
        },
        strings: {
          fourStrings: false,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        },
      });
  });

  it('should change minMax', () => {
    expect(filterData(initialState, changeMinMax([100, 500])))
      .toEqual({
        priceMin: '',
        priceMax: '',
        minMax: [100, 500],
        isActive: false,
        guitarType: {
          acoustic: false,
          electric: false,
          ukulele: false,
        },
        strings: {
          fourStrings: false,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        },
      });
  });

  it('should change filterStatus', () => {
    expect(filterData(initialState, changeFilterStatus(true)))
      .toEqual({
        priceMin: '',
        priceMax: '',
        minMax: [0, 0],
        isActive: true,
        guitarType: {
          acoustic: false,
          electric: false,
          ukulele: false,
        },
        strings: {
          fourStrings: false,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        },
      });
  });

  it('should change acoustic filter in filterType', () => {
    expect(filterData(initialState, changeFilterType({ acoustic: true })))
      .toEqual({
        priceMin: '',
        priceMax: '',
        minMax: [0, 0],
        isActive: false,
        guitarType: {
          acoustic: true,
          electric: false,
          ukulele: false,
        },
        strings: {
          fourStrings: false,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        },
      });
  });

  it('should change fourStrings filter in strings', () => {
    expect(filterData(initialState, changeFilterStrings({ fourStrings: true })))
      .toEqual({
        priceMin: '',
        priceMax: '',
        minMax: [0, 0],
        isActive: false,
        guitarType: {
          acoustic: false,
          electric: false,
          ukulele: false,
        },
        strings: {
          fourStrings: true,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        },
      });
  });

  it('should reset filterState', () => {
    expect(filterData(changedState, resetFilterState))
      .toEqual(initialState);
  });
});
