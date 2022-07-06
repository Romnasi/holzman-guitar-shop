import { FilterTypeComponent } from '../types/filter';
import { useSelector } from 'react-redux';
import { getAcousticStatus, getElectricStatus, getUkuleleStatus } from '../store/filter-data/selectors';

function FilterType({ handleFilterChange }: FilterTypeComponent): JSX.Element {
  const isCheckedAcoustic = useSelector(getAcousticStatus);
  const isCheckedElectric = useSelector(getElectricStatus);
  const isCheckedUkulele = useSelector(getUkuleleStatus);

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>
      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="acoustic"
          name="acoustic"
          checked={isCheckedAcoustic}
        />
        <label htmlFor="acoustic">Акустические гитары</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="electric"
          name="electric"
          checked={isCheckedElectric}
        />
        <label htmlFor="electric">Электрогитары</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="ukulele"
          name="ukulele"
          checked={isCheckedUkulele}
        />
        <label htmlFor="ukulele">Укулеле</label>
      </div>
    </fieldset>
  );
}

export default FilterType;
