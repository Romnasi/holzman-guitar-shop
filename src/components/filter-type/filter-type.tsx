import { FilterTypeComponent } from '../../types/filter';
import { useSelector } from 'react-redux';
import { getGuitarTypeState } from '../../store/filter-data/selectors';
import { FilterQueryKey } from '../../const/filter';

function FilterType({ handleFilterChange }: FilterTypeComponent): JSX.Element {
  const guitarTypeState = useSelector(getGuitarTypeState);

  const handleTypeFilterChange = (key: FilterQueryKey, value: boolean) => {
    handleFilterChange(key, !value);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="acoustic"
          name="acoustic"
          checked={guitarTypeState.acoustic}
          onChange={() => handleTypeFilterChange(FilterQueryKey.ACOUSTIC, guitarTypeState.acoustic)}
        />
        <label htmlFor="acoustic">Акустические гитары</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="electric"
          name="electric"
          checked={guitarTypeState.electric}
          onChange={() => handleTypeFilterChange(FilterQueryKey.ELECTRIC, guitarTypeState.electric)}
        />
        <label htmlFor="electric">Электрогитары</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="ukulele"
          name="ukulele"
          checked={guitarTypeState.ukulele}
          onChange={() => handleTypeFilterChange(FilterQueryKey.UKULELE, guitarTypeState.ukulele)}
        />
        <label htmlFor="ukulele">Укулеле</label>
      </div>
    </fieldset>
  );
}

export default FilterType;
