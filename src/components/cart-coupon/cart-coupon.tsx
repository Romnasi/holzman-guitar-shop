import { Formik, Form, Field } from 'formik';
import { CouponSchema } from '../../validation-schema';
import { useDispatch, useSelector } from 'react-redux';
import { postCouponAction } from '../../store/api-actions';
import { getCouponStatus, getCouponValue } from '../../store/cart-data/selectors';
import { CouponStatus } from '../../types/cart';
import { addCoupon } from '../../store/action';

const getCouponResponseMessage = (couponStatus: CouponStatus) => {
  if (couponStatus === null) {
    return null;
  }
  if (!couponStatus) {
    return <p className="form-input__message form-input__message--error">Неверный промокод</p>;
  }
  return <p className="form-input__message form-input__message--success">Промокод принят</p>;
};


function CartCoupon(): JSX.Element {
  const dispatch = useDispatch();
  const couponStatus = useSelector(getCouponStatus);
  const couponValue = useSelector(getCouponValue);

  return (
    <div className="cart__coupon coupon">
      <h2 className="title title--little coupon__title">Промокод на скидку</h2>
      <p className="coupon__info">Введите свой промокод, если он у вас есть.</p>

      <Formik
        initialValues={{ coupon: couponValue }}
        validationSchema={CouponSchema}
        onSubmit={({ coupon }, actions) => {
          actions.setSubmitting(false);
          dispatch(addCoupon(coupon.trim()));
          dispatch(postCouponAction(coupon.trim()));
        }}
      >
        {({ errors, touched }) => (
          <Form className="coupon__form">
            <div className="form-input coupon__input">
              <label className="visually-hidden" htmlFor="coupon">Промокод</label>
              <Field
                type="text"
                placeholder="Введите промокод"
                id="coupon"
                name="coupon"
              />
              {getCouponResponseMessage(couponStatus)}

              {errors.coupon && touched.coupon ? (
                <p className="form-input__message form-input__message--error">{errors.coupon}</p>
              ) : null}
            </div>
            <button
              className="button button--big coupon__button"
              type="submit"
            >
              Применить
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default CartCoupon;
