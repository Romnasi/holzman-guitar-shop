import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FilterStringsComponent } from '../../types/filter';
import { getGuitarTypeState, getStringsState } from '../../store/filter-data/selectors';
import { FilterQueryKey } from '../../const/filter';
import { getStringsDisabledState } from '../../utils/filter';

function FilterStrings({ handleFilterChange }: FilterStringsComponent): JSX.Element {
  const stringsState = useSelector(getStringsState);
  const { acoustic, electric, ukulele } = useSelector(getGuitarTypeState);
  const [disabledState, setDisabledState] = useState(getStringsDisabledState());

  const handleStringsFilterChange = (key: FilterQueryKey, value: boolean) => {
    handleFilterChange(key, !value);
  };

  useEffect(() => {
    if (acoustic || electric || ukulele) {

      if (
        (acoustic && electric && ukulele)
        || (acoustic && electric && !ukulele)
        || (acoustic && !electric && ukulele)
      ) {
        setDisabledState(getStringsDisabledState());
      } else if (acoustic && !electric && !ukulele) {
        setDisabledState({
          fourStrings: true,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: false,
        });
      } else if ((!acoustic && electric && ukulele) || (!acoustic && electric && !ukulele)) {
        setDisabledState({
          fourStrings: false,
          sixStrings: false,
          sevenStrings: false,
          twelveStrings: true,
        });
      } else if (!acoustic && !electric && ukulele) {
        setDisabledState({
          fourStrings: false,
          sixStrings: true,
          sevenStrings: true,
          twelveStrings: true,
        });
      }

    } else {
      setDisabledState(getStringsDisabledState());
    }
  }, [acoustic, electric, ukulele]);

  return(
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>
      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="4-strings"
          name="4-strings"
          checked={stringsState.fourStrings}
          disabled={disabledState.fourStrings}
          onChange={() => handleStringsFilterChange(FilterQueryKey.FOUR_STRINGS, stringsState.fourStrings)}
        />
        <label htmlFor="4-strings">4</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="6-strings"
          name="6-strings"
          checked={stringsState.sixStrings}
          disabled={disabledState.sixStrings}
          onChange={() => handleStringsFilterChange(FilterQueryKey.SIX_STRINGS, stringsState.sixStrings)}
        />
        <label htmlFor="6-strings">6</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="7-strings"
          name="7-strings"
          checked={stringsState.sevenStrings}
          disabled={disabledState.sevenStrings}
          onChange={() => handleStringsFilterChange(FilterQueryKey.SEVEN_STRINGS, stringsState.sevenStrings)}
        />
        <label htmlFor="7-strings">7</label>
      </div>

      <div className="form-checkbox catalog-filter__block-item">
        <input
          className="visually-hidden"
          type="checkbox"
          id="12-strings"
          name="12-strings"
          checked={stringsState.twelveStrings}
          disabled={disabledState.twelveStrings}
          onChange={() => handleStringsFilterChange(FilterQueryKey.TWELVE_STRINGS, stringsState.twelveStrings)}
        />
        <label htmlFor="12-strings">12</label>
      </div>
    </fieldset>
  );
}

export default FilterStrings;
