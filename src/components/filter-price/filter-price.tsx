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
      if ((priceMin || priceMin === 0) && priceMin < min) {
        dispatch(changePriceMin(min));
      }
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [priceMin]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if ((priceMin || priceMin === 0) && priceMax < min) {
        dispatch(changePriceMax(min));
      }
      if (priceMax > max) {
        dispatch(changePriceMax(max));
      }
      if (priceMin && priceMax < priceMin) {
        dispatch(changePriceMax(Number(priceMin)));
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
