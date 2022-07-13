import './search-bar.css';
import { useEffect, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { getGuitars, getLoadedDataStatus } from '../../store/catalog-data/selectors';
import { getSearchItems } from '../../utils/search-bar';
import { Link } from 'react-router-dom';
import { SearchItems } from '../../types/search-bar';

function SearchBar(): JSX.Element {
  const [searchItems, setSearchItems] = useState<SearchItems>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isListHidden, setIsListHidden] = useState(true);
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const guitars = useSelector(getGuitars);

  const listClass = 'form-search__select-list list-opened';
  const listClassHidden = 'form-search__select-list hidden';

  useEffect(() => {
    const handleClickOutside = (evt: Event) => {
      const element = evt.target as HTMLElement;
      const isClickInsideList = element.closest('.form-search__select-list');
      const isClickInsideInput = element.closest('.form-search__form');
      if (!isClickInsideList && !isClickInsideInput) {
        setIsListHidden(true);
      }
    };
    window.addEventListener('click', handleClickOutside);

    return  () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isDataLoaded && searchValue) {
      const curSearchItems = getSearchItems(guitars, searchValue);

      if (curSearchItems.length) {
        setSearchItems(curSearchItems);
      } else {
        setSearchItems([{
          name: 'Не найдено',
          vendorCode: '',
          id: 1,
          isLink: false,
        }]);
      }
    }
  }, [searchValue, isDataLoaded, guitars]);

  useEffect(() => {
    if (searchItems.length && searchValue) {
      setIsListHidden(false);
    } else {
      setIsListHidden(true);
    }
  }, [searchItems, searchValue]);

  const handleSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    setSearchValue(target.value);
  };

  const handleSearchFocus = () => {
    if (searchValue) {
      setIsListHidden(false);
    }
  };

  const handleFormSubmit = (evt: React.FormEvent<HTMLFormElement>) => evt.preventDefault();

  return (
    <div className="form-search">
      <form className="form-search__form" id="form-search" onSubmit={handleFormSubmit}>
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          value={searchValue}
          className="form-search__input"
          id="search"
          type="text"
          autoComplete="off"
          placeholder="что вы ищите?"
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>

      </form>
      <ul className={isListHidden ? listClassHidden : listClass }>
        {
          searchItems.map(({ id, name, vendorCode, isLink }) => {
            if (!isLink) {
              return (
                <li className="form-search__item form-search__item--not-found" key={id} >
                  <span>{name}</span>
                </li>
              );
            }
            return (
              <li className="form-search__select-item" key={id} >
                <Link
                  className="form-search__link"
                  onClick={() => setSearchValue('')}
                  to={`/products/${vendorCode}`}
                >
                  {name}
                </Link>
              </li>
            );
          })
        }
      </ul>

      <button
        onClick={() => setSearchValue('')}
        className="form-search__reset"
        type="reset"
        form="form-search"
      >
        <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchBar;
