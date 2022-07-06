import { useState, useEffect } from 'react';
import { FilterPriceComponent } from '../../types/filter';
import { formatter } from '../../utils/catalog-product';
import { getMinMaxPrice } from '../../utils/filter';
import { PriceControl, FilterQueryKey } from '../../const/filter';

function FilterPrice({ guitars, handleFilterChange }: FilterPriceComponent): JSX.Element {
  const [min, max] = getMinMaxPrice(guitars);
  const [priceMin, setPriceMin] = useState<string | number>('');
  const [priceMax, setPriceMax] = useState<string | number>('');

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if ((priceMin || priceMin === 0) && priceMin < min) {
        setPriceMin(min);
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [priceMin]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (priceMax > max) {
        setPriceMax(max);
      }
      if (priceMin && priceMax < priceMin) {
        setPriceMax(priceMin);
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [priceMax]);

  useEffect(() => {
    if (priceMin && priceMin >= min) {
      handleFilterChange(FilterQueryKey.PRICE_MIN, priceMin);
    }
  }, [priceMin]);

  useEffect(() => {
    if (priceMax && priceMax <= max && priceMax >= min) {
      handleFilterChange(FilterQueryKey.PRICE_MAX, priceMax);
    }
  }, [priceMax]);

  const handlePriceChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    const { id } = input;
    const value = Number(input.value);

    switch (id) {
      case PriceControl.MIN:
        setPriceMin(value);
        break;
      case PriceControl.MAX:
        setPriceMax(value);
        break;
      default:
        break;
    }
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">
        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input
            type="number"
            placeholder={formatter.format(min)}
            id={PriceControl.MIN}
            name={PriceControl.MIN}
            value={priceMin}
            min={0}
            onChange={handlePriceChange}
          />
        </div>
        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input
            type="number"
            placeholder={formatter.format(max)}
            id={PriceControl.MAX}
            name={PriceControl.MAX}
            value={priceMax}
            min={0}
            onChange={handlePriceChange}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
