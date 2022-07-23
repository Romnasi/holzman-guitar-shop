import ProductMain from '../product-main/product-main';
import PageTemplate from '../../hocs/page-template';

function ProductPage(): JSX.Element {
  return(
    <PageTemplate>
      <ProductMain />
    </PageTemplate>
  );
}

export default ProductPage;
