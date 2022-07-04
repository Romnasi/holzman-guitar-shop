import { useState, useEffect } from 'react';
import { FilterPriceComponent } from '../../types/filter';
import { formatter } from '../../utils/catalog-product';
import { getMinMaxPrice } from '../../utils/filter';
import { PriceControl, FilterQueryKey } from '../../const/filter';

function FilterPrice({ guitars, setFilterQuery }: FilterPriceComponent): JSX.Element {
  const [min, max] = getMinMaxPrice(guitars);
  const [priceMin, setPriceMin] = useState<string | number>('');
  const [priceMax, setPriceMax] = useState<string | number>('');

  const setMinPrice = (value: number) => {
    setPriceMin(value);
    setTimeout(() => {
      if (value < min) {
        setPriceMin(min);
      }
    }, 2000);
  };

  const setMaxPrice = (value: number) => {
    setPriceMax(value);
    setTimeout(() => {
      if (value > max) {
        setPriceMax(max);
      }
      if (priceMin && value < priceMin) {
        setPriceMax(priceMin);
      }
    }, 2000);
  };

  useEffect(() => {
    if (priceMin) {
      setFilterQuery(FilterQueryKey.PRICE_MIN, priceMin);
    }
  }, [priceMin]);

  useEffect(() => {
    if (priceMax) {
      setFilterQuery(FilterQueryKey.PRICE_MAX, priceMax);
    }
  }, [priceMax]);

  const handlePriceChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    const { id } = input;
    const value = Number(input.value);

    switch (id) {
      case PriceControl.MIN:
        setMinPrice(value);
        break;
      case PriceControl.MAX:
        setMaxPrice(value);
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
