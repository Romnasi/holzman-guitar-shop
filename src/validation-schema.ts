import * as Yup from 'yup';

export const ReviewSchema = Yup.object().shape({
  userName: Yup.string()
    .min(2, 'Не менее 2 знаков!')
    .max(20, 'Не более 20 знаков!')
    .required('Заполните поле'),
  rating: Yup.string()
    .required('Поставьте оценку'),
  advantage: Yup.string()
    .min(3, 'Не менее 3 знаков!')
    .max(30, 'Не более 30 знаков!')
    .required('Заполните поле'),
  disadvantage: Yup.string()
    .min(3, 'Не менее 3 знаков!')
    .max(30, 'Не более 30 знаков!')
    .required('Заполните поле'),
  comment: Yup.string()
    .min(20, 'Не менее 20 знаков!')
    .max(1000, 'Не более 1000 знаков!')
    .required('Заполните поле'),
});

export const CouponSchema = Yup.object().shape({
  coupon: Yup.string()
    .max(50, 'Не более 50 знаков!')
    .required('Промокод не введен'),
});
