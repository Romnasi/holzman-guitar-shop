import { useEffect } from 'react';
import { getPageNumbers, getNextPage, getPrevPage } from '../../utils/pagination';
import { PaginationData } from '../../const/pagination';
import { Link, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurPagination, getGuitarNumber } from '../../store/catalog-data/selectors';
import { changeCurPagination, redirectToRoute } from '../../store/action';
import { AppRoute } from '../../const/app-route';

function Pagination(): JSX.Element {
  const itemNumber = useSelector(getGuitarNumber);
  const activePage = useSelector(getCurPagination);
  const dispatch = useDispatch();
  const { hash, search } = useLocation();

  const lastPage = Math.ceil(itemNumber / PaginationData.CARD_PER_PAGE);
  const pageNumbers = getPageNumbers(lastPage);
  const isFirstPage = activePage === PaginationData.FIRST_PAGE;
  const isLastPage = activePage === lastPage;

  const getPaginationPath = (hashPath: string) => search ? `${search}${hashPath}` : hashPath;

  useEffect(() => {
    if (!hash) {
      dispatch(changeCurPagination(PaginationData.DEFAULT_ACTIVE_PAGE));
      return;
    }
    if (hash.startsWith('#page_')) {
      const pageNumber = parseInt(hash.split('#page_')[1], 10);
      const isPageNumber = typeof pageNumber === 'number'
        && pageNumber >= PaginationData.DEFAULT_ACTIVE_PAGE
        && pageNumber <= lastPage;
      if (isPageNumber) {
        dispatch(changeCurPagination(pageNumber));
        return;
      }
      dispatch(changeCurPagination(PaginationData.DEFAULT_ACTIVE_PAGE));
      dispatch(redirectToRoute(`${AppRoute.CATALOG}#page_${PaginationData.DEFAULT_ACTIVE_PAGE}`));
    }
  }, [dispatch, hash, lastPage]);

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">

        {
          !isFirstPage &&
          <li className="pagination__page pagination__page--prev" id="next">
            <Link
              className="link pagination__page-link"
              to={getPaginationPath(`#page_${getPrevPage(activePage)}`)}
            >
              Назад
            </Link>
          </li>
        }

        {pageNumbers.map((pageNumber) => {
          const itemClassName = activePage === pageNumber
            ? 'pagination__page pagination__page--active'
            : 'pagination__page';
          return (
            <li key={pageNumber} className={itemClassName} >
              <Link
                className="link pagination__page-link"
                onClick={() => dispatch(changeCurPagination(pageNumber))}
                to={getPaginationPath(`#page_${pageNumber}`)}
              >
                {pageNumber}
              </Link>
            </li>
          );
        })}

        {
          !isLastPage &&
          <li className="pagination__page pagination__page--next" id="next">
            <Link
              className="link pagination__page-link"
              to={getPaginationPath(`#page_${getNextPage(activePage)}`)}
            >
              Далее
            </Link>
          </li>
        }
      </ul>
    </div>
  );
}

export default Pagination;
