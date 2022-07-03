import { useState } from 'react';
import { FilterPriceComponent, PriceState } from '../../types/filter';
import { formatter } from '../../utils/catalog-product';
import { getMinMaxPrice } from '../../utils/filter';
import { PriceControl } from '../../const/filter';

function FilterPrice({ guitars }: FilterPriceComponent): JSX.Element {
  const [min, max] = getMinMaxPrice(guitars);
  const [price, setPrice] = useState<PriceState>({ min: undefined, max: undefined });

  const setMinPrice = (value: number) => {
    setPrice((prev) => ({...prev, min: value }));
    setTimeout(() => {
      if (value < min) {
        setPrice((prev) => ({...prev, min }));
      }
    }, 2000);
  };

  const setMaxPrice = (value: number) => {
    setPrice((prev) => ({...prev, max: value }));
    setTimeout(() => {
      if (value > max) {
        setPrice((prev) => ({...prev, max }));
      }
      if (price.min && value < price.min) {
        setPrice((prev) => ({...prev, max: price.min }));
      }
    }, 2000);
  };

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
            value={price.min}
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
            value={price.max}
            min={0}
            onChange={handlePriceChange}
          />
        </div>
      </div>
    </fieldset>
  );
}

export default FilterPrice;
