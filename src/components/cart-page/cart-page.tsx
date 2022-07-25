import PageTemplate from '../../hocs/page-template';
import Breadcrumbs from '../breadcrumbs/breadcrumbs';
import { cartBreadcrumbs } from '../../const/breadcrumbs';
import CartList from '../cart-list/cart-list';
import CartCoupon from '../cart-coupon/cart-coupon';
import CartTotal from '../cart-total/cart-total';

function CartPage(): JSX.Element {
  return (
    <PageTemplate>
      <main className="page-content">
        <div className="container">
          <h1 className="title title--bigger page-content__title">Корзина</h1>
          <Breadcrumbs crumbs={cartBreadcrumbs} />

          <div className="cart">
            <CartList />

            <div className="cart__footer">
              <CartCoupon />

              <CartTotal />
            </div>
          </div>
        </div>
      </main>
    </PageTemplate>
  );
}

export default CartPage;
