import Header from '../header/header';
import Footer from '../footer/footer';
import CatalogMain from '../catalog-main/catalog-main';
import { useSelector } from 'react-redux';
import { getLoadedCommentsStatus, getLoadedDataStatus } from '../../store/catalog-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function CatalogPage(): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const isCommentsLoaded = useSelector(getLoadedCommentsStatus);

  return (
    <div className="wrapper">
      <Header/>
      {!isDataLoaded && !isCommentsLoaded && <LoadingScreen />}
      {isDataLoaded && isCommentsLoaded && <CatalogMain />}
      <Footer/>
    </div>
  );
}

export default CatalogPage;
