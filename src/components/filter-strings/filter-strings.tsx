import { FilterStringsComponent } from '../../types/filter';
import { useSelector, useDispatch } from 'react-redux';
import { getGuitarTypeState, getStringsState } from '../../store/filter-data/selectors';
import { changeFilterStrings } from '../../store/action';
import { useEffect, useState } from 'react';

const getDefaultDisabledState = () => ({
  fourStrings: false,
  sixStrings: false,
  sevenStrings: false,
  twelveStrings: false,
});

function FilterStrings({ handleFilterChange }: FilterStringsComponent): JSX.Element {
  const stringsState = useSelector(getStringsState);
  const { acoustic, electric, ukulele } = useSelector(getGuitarTypeState);
  const [disabledState, setDisabledState] = useState(getDefaultDisabledState());
  const dispatch = useDispatch();

  useEffect(() => {
    if (acoustic || electric || ukulele) {

      if (
        (acoustic && electric && ukulele)
        || (acoustic && electric && !ukulele)
        || (acoustic && !electric && ukulele)
      ) {
        setDisabledState(getDefaultDisabledState());
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
      setDisabledState(getDefaultDisabledState());
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
          onChange={() => dispatch(changeFilterStrings({ fourStrings: !stringsState.fourStrings }))}
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
          onChange={() => dispatch(changeFilterStrings({ sixStrings: !stringsState.sixStrings }))}
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
          onChange={() => dispatch(changeFilterStrings({ sevenStrings: !stringsState.sevenStrings }))}
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
          onChange={() => dispatch(changeFilterStrings({ twelveStrings: !stringsState.twelveStrings }))}
        />
        <label htmlFor="12-strings">12</label>
      </div>
    </fieldset>
  );
}

export default FilterStrings;
