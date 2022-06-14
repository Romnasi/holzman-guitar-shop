import { useEffect } from 'react';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import Reviews from '../reviews/reviews';
import { getBigImagePath, formatter } from '../../utils/catalog-product';
import ProductRate from '../product-rate/product-rate';
import ProductTabs from '../product-tabs/product-tabs';
import { CardType } from '../../const/rate';
import { useParams } from 'react-router-dom';
import { redirectToRoute, addCurGuitar } from '../../store/action';
import { AppRoute } from '../../const/app-route';
import { GuitarData } from '../../types/card-data';
import { getGuitars, getComments } from '../../store/catalog-data/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentSortedReviews } from '../../utils/product';

function ProductMain(): JSX.Element {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getComments);
  const guitars: GuitarData[] = useSelector(getGuitars);
  const curGuitarIdx = guitars.map(({vendorCode}) => vendorCode).indexOf(id);
  const curGuitar = guitars[curGuitarIdx];
  const { name, previewImg, stringCount, rating, type, description, price, id: guitarId } = curGuitar;

  useEffect(() => {
    dispatch(addCurGuitar(curGuitar));
  }, []);

  const reviewsData = getCurrentSortedReviews(comments, guitarId);

  if (curGuitarIdx === -1) {
    dispatch(redirectToRoute(AppRoute.NOT_FOUND));
  }

  return(
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">{name}</h1>
        <Breadcrumbs />

        <div className="product-container">
          <img
            className="product-container__img"
            src={previewImg}
            srcSet={`${getBigImagePath(previewImg)} 2x`}
            width="90" height="235" alt={name}
          />

          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">
              {name}
            </h2>

            <ProductRate
              rating={rating}
              cardType={CardType.PRODUCT}
              guitarId={guitarId}
            />
            <ProductTabs id={id} type={type} stringCount={stringCount} description={description} />
          </div>
          <div className="product-container__price-wrapper">
            <p className="product-container__price-info product-container__price-info--title">Цена:</p>
            <p className="product-container__price-info product-container__price-info--value">
              {formatter.format(price)} ₽
            </p>
            <button className="button button--red button--big product-container__button">
              Добавить в корзину
            </button>
          </div>
        </div>
        <Reviews reviewsData={reviewsData} />
      </div>
    </main>
  );
}

export default ProductMain;
