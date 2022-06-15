import Header from '../header/header';
import Footer from '../footer/footer';
import { useSelector } from 'react-redux';
import { getLoadedDataStatus, getLoadedCommentsStatus } from '../../store/catalog-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';
import ProductMain from '../product-main/product-main';

function ProductPage(): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const isCommentsLoaded = useSelector(getLoadedCommentsStatus);

  return(
    <div className="wrapper">
      <Header/>

      {!isDataLoaded && !isCommentsLoaded && <LoadingScreen />}
      {isDataLoaded && isCommentsLoaded && <ProductMain />}

      <Footer/>
    </div>
  );
}

export default ProductPage;
