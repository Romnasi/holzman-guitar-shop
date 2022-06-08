import Header from '../header/header';
import Footer from '../footer/footer';
import CatalogMain from '../catalog-main/catalog-main';
import { useSelector } from 'react-redux';
import { getLoadedDataStatus } from '../../store/catalog-data/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

function CatalogPage(): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);

  return (
    <div className="wrapper">
      <Header/>
      {!isDataLoaded && <LoadingScreen />}
      {isDataLoaded && <CatalogMain />}
      <Footer/>
    </div>
  );
}

export default CatalogPage;
