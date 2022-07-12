import { useEffect } from 'react';
import { FilterPriceComponent } from '../../types/filter';
import { formatter } from '../../utils/catalog-product';
import { getMinMaxPrice } from '../../utils/filter';
import { PriceControl, FilterQueryKey } from '../../const/filter';
import { useSelector, useDispatch } from 'react-redux';
import { getPriceMin, getPriceMax } from '../../store/filter-data/selectors';
import { changePriceMax, changePriceMin } from '../../store/action';

function FilterPrice({ guitars, handleFilterChange }: FilterPriceComponent): JSX.Element {
  const [min, max] = getMinMaxPrice(guitars);
  const dispatch = useDispatch();
  const priceMin = useSelector(getPriceMin);
  const priceMax = useSelector(getPriceMax);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const hasValue = priceMin || priceMin === 0;
      if (hasValue && priceMin < min) {
        handleFilterChange(FilterQueryKey.PRICE_MIN, min);
      } else if (hasValue && priceMin >= min) {
        handleFilterChange(FilterQueryKey.PRICE_MIN, priceMin);
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [priceMin]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      const hasPriceMin = priceMin || priceMin === 0;
      const hasPriceMax = priceMax || priceMax === 0;
      if (hasPriceMin && hasPriceMax && priceMax < priceMin) {
        handleFilterChange(FilterQueryKey.PRICE_MAX, priceMin);
      } else if (hasPriceMax && priceMax < min) {
        handleFilterChange(FilterQueryKey.PRICE_MAX, min);
      } else if (hasPriceMax && priceMax > max) {
        handleFilterChange(FilterQueryKey.PRICE_MAX, max);
      } else if (hasPriceMax && priceMax <= max && priceMax >= min) {
        handleFilterChange(FilterQueryKey.PRICE_MAX, priceMax);
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [priceMax]);

  const handlePriceChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;
    const { id } = input;
    const value = Number(input.value);

    switch (id) {
      case PriceControl.MIN:
        dispatch(changePriceMin(value));
        break;
      case PriceControl.MAX:
        dispatch(changePriceMax(value));
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
