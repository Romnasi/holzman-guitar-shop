import { useEffect } from 'react';
import { getPageNumbers, getNextPage, getPrevPage } from '../../utils/pagination';
import { PaginationData } from '../../const/pagination';
import { Link, useParams, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getCurPagination, getGuitarNumber } from '../../store/catalog-data/selectors';
import { changeCurPagination } from '../../store/action';

function Pagination(): JSX.Element {
  const itemNumber = useSelector(getGuitarNumber);
  const activePage = useSelector(getCurPagination);
  const dispatch = useDispatch();
  const { paginationNumber } = useParams<{ paginationNumber: string }>();

  useEffect(() => {
    if (paginationNumber) {
      const pageNumber = Number(paginationNumber.split('page_')[1]);
      dispatch(changeCurPagination(pageNumber));
    }
  }, [paginationNumber]);

  const lastPage = Math.ceil(itemNumber / PaginationData.CARD_PER_PAGE);
  const pageNumbers = getPageNumbers(lastPage);
  const isFirstPage = activePage === PaginationData.FIRST_PAGE;
  const isLastPage = activePage === lastPage;

  if (Number(paginationNumber) === 100) {
    return <Redirect to="/404" />;
  }

  return (
    <div className="pagination page-content__pagination">
      <ul className="pagination__list">

        {
          !isFirstPage &&
          <li className="pagination__page pagination__page--prev" id="next">
            <Link
              className="link pagination__page-link"
              to={`/catalog/page_${getPrevPage(activePage)}`}
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
                to={`/catalog/page_${pageNumber}`}
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
              to={`/catalog/page_${getNextPage(activePage)}`}
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
