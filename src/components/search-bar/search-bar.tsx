import './search-bar.css';
import React, { useEffect, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { getGuitars } from '../../store/catalog-data/selectors';
import { getSearchItems } from '../../utils/search-bar';
import { Link } from 'react-router-dom';
import { SearchItems } from '../../types/search-bar';

function SearchBar(): JSX.Element {
  const [searchItems, setSearchItems] = useState<SearchItems>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isListHidden, setIsListHidden] = useState(true);
  const guitars = useSelector(getGuitars);

  const listClass = 'form-search__select-list list-opened';
  const listClassHidden = 'form-search__select-list hidden';

  useEffect(() => {
    if (guitars.length && searchValue) {
      setSearchItems(getSearchItems(guitars, searchValue));
    }
  }, [guitars, searchValue]);

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
          searchItems.map(({ id, name, vendorCode }) => (
            <li className="form-search__select-item" key={id} >
              <Link
                className="form-search__link"
                onClick={() => setSearchValue('')}
                to={`/products/${vendorCode}`}
              >
                {name}
              </Link>
            </li>
          ))
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
