import { useState, useEffect } from 'react';
import { FilterTypeComponent } from '../../types/filter';
import { useSelector } from 'react-redux';
import { getGuitarTypeState, getStringsState } from '../../store/filter-data/selectors';
import { FilterQueryKey } from '../../const/filter';
import { getTypeDisabledState } from '../../utils/filter';

function FilterType({ handleFilterChange }: FilterTypeComponent): JSX.Element {
  const [disabledState, setDisabledState] = useState(getTypeDisabledState());

  const guitarTypeState = useSelector(getGuitarTypeState);
  const { fourStrings, sixStrings, sevenStrings, twelveStrings } = useSelector(getStringsState);

  useEffect(() => {
    if (fourStrings || sixStrings || sevenStrings || twelveStrings) {
      if (
        (fourStrings && sixStrings)
        || (fourStrings && sevenStrings)
        || (fourStrings && twelveStrings)
      ) {
        setDisabledState(getTypeDisabledState());
      } else if (fourStrings && !sixStrings && !sevenStrings && !twelveStrings) {
        setDisabledState({
          acoustic: true,
          electric: false,
          ukulele: false,
        });
      } else if (
        (!fourStrings && sixStrings && !sevenStrings && !twelveStrings)
        || (!fourStrings && !sixStrings && sevenStrings && !twelveStrings)
        || (!fourStrings && !sixStrings && sevenStrings && twelveStrings)
        || (!fourStrings && sixStrings && !sevenStrings && twelveStrings)
        || (!fourStrings && sixStrings && sevenStrings && !twelveStrings)
        || (!fourStrings && sixStrings && sevenStrings && twelveStrings)
      ) {
        setDisabledState({
          acoustic: false,
          electric: false,
          ukulele: true,
        });
      } else if (!fourStrings && !sixStrings && !sevenStrings && twelveStrings) {
        setDisabledState({
          acoustic: false,
          electric: true,
          ukulele: true,
        });
      }

    } else {
      setDisabledState(getTypeDisabledState());
    }
  }, [fourStrings, sixStrings, sevenStrings, twelveStrings]);

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
          disabled={disabledState.acoustic}
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
          disabled={disabledState.electric}
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
          disabled={disabledState.ukulele}
          onChange={() => handleTypeFilterChange(FilterQueryKey.UKULELE, guitarTypeState.ukulele)}
        />
        <label htmlFor="ukulele">Укулеле</label>
      </div>
    </fieldset>
  );
}

export default FilterType;
