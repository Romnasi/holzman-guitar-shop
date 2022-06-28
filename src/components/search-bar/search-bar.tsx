import './search-bar.css';
import { useEffect, useState, ChangeEvent } from 'react';
import { useSelector } from 'react-redux';
import { getGuitars } from '../../store/catalog-data/selectors';
import { GuitarsData } from '../../types/card-data';
import { Link } from 'react-router-dom';

type SearchItem = {
  name: string;
  vendorCode: string;
  id: number;
}

type SearchItems = SearchItem[];

const getSearchItems = (guitars: GuitarsData, searchValue: string): SearchItems => guitars
  .reduce((acc: SearchItems, { id, name, vendorCode }) => {
    const curName = name.toLowerCase();
    if (curName.indexOf(searchValue.toLowerCase()) + 1) {
      acc.push({ id, name, vendorCode });
    }
    return acc;
  }, []);

function SearchBar(): JSX.Element {
  const [searchItems, setSearchItems] = useState<SearchItems>([]);
  const [searchValue, setSearchValue] = useState('');
  const [isListHidden, setIsListHidden] = useState(true);
  const guitars = useSelector(getGuitars);

  const listClass = 'form-search__select-list';
  const listClassHidden = `${listClass} hidden`;

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

  const handleOnSearchChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const target = evt.target as HTMLInputElement;
    setSearchValue(target.value);
  };

  return (
    <div className="form-search">
      <form className="form-search__form" id="form-search">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input
          onChange={(evt: ChangeEvent<HTMLInputElement>) => handleOnSearchChange(evt)}
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
              <Link className="form-search__link" to={`/products/${vendorCode}`}>
                {name}
              </Link>
            </li>
          ))
        }
      </ul>
      <button className="form-search__reset" type="reset" form="form-search">
        <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
          <use xlinkHref="#icon-close"></use>
        </svg><span className="visually-hidden">Сбросить поиск</span>
      </button>
    </div>
  );
}

export default SearchBar;
