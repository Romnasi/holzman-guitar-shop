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
import { catalogBreadcrumbs } from '../../const/breadcrumbs';
import LoadingScreen from '../loading-screen/loading-screen';

function ProductMain(): JSX.Element {
  const dispatch = useDispatch();
  const { id } = useParams<{ id: string }>();

  const comments = useSelector(getComments);
  const guitars: GuitarData[] = useSelector(getGuitars);
  const curGuitarIdx = guitars.map(({vendorCode: code}) => code).indexOf(id);
  const curGuitar = guitars[curGuitarIdx];

  useEffect(() => {
    if (curGuitarIdx !== -1 && curGuitar) {
      dispatch(addCurGuitar(curGuitar));
    } else {
      dispatch(redirectToRoute(AppRoute.NOT_FOUND));
    }
  }, []);

  if (!curGuitar) {
    return <LoadingScreen />;
  }
  const reviewsData = getCurrentSortedReviews(comments, curGuitar.id);


  const dynamicLink = {
    id: 3,
    linkName: curGuitar.name,
    path: `${AppRoute.CATALOG}/${curGuitar.vendorCode}`,
  };

  return(
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">{curGuitar.name}</h1>
        <Breadcrumbs crumbs={catalogBreadcrumbs} dynamicLink={dynamicLink} />

        <div className="product-container">
          <img
            className="product-container__img"
            src={curGuitar.previewImg}
            srcSet={`${getBigImagePath(curGuitar.previewImg)} 2x`}
            width="90" height="235" alt={curGuitar.name}
          />

          <div className="product-container__info-wrapper">
            <h2 className="product-container__title title title--big title--uppercase">
              {curGuitar.name}
            </h2>

            <ProductRate
              rating={curGuitar.rating}
              cardType={CardType.PRODUCT}
              guitarId={curGuitar.id}
            />
            <ProductTabs id={id} type={curGuitar.type} stringCount={curGuitar.stringCount} description={curGuitar.description} />
          </div>
          <div className="product-container__price-wrapper">
            <p className="product-container__price-info product-container__price-info--title">Цена:</p>
            <p className="product-container__price-info product-container__price-info--value">
              {formatter.format(curGuitar.price)} ₽
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
