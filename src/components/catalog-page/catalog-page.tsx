import Header from '../header/header';
import Footer from '../footer/footer';
import CatalogMain from '../catalog-main/catalog-main';

function CatalogPage(): JSX.Element {
  return (
    <div className="wrapper">
      <Header/>
      <CatalogMain />
      <Footer/>
    </div>
  );
}

export default CatalogPage;
