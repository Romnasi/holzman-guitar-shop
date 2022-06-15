import { useSelector } from 'react-redux';
import { getCurGuitar } from '../../store/catalog-data/selectors';
import { Formik, Form, Field } from 'formik';
import { ReviewSchema } from '../../validation-schema';
import { ReviewFormComponent } from '../../types/review';
import { reviewFormValues } from '../../const/review';
import { useDispatch } from 'react-redux';
import { postCommentAction } from '../../store/api-actions';

function ReviewForm({handleModalClose}: ReviewFormComponent): JSX.Element {
  const guitarData = useSelector(getCurGuitar);
  const dispatch = useDispatch();

  return(
    <>
      <h2 className="modal__header modal__header--review title title--medium">
        Оставить отзыв
      </h2>
      <h3 className="modal__product-name title title--medium-20 title--uppercase">
        {guitarData?.name}
      </h3>
      <Formik
        initialValues={reviewFormValues}
        validationSchema={ReviewSchema}
        onSubmit={({ userName, advantage, disadvantage, comment, rating }, actions) => {
          if (!guitarData) {
            return;
          }
          const { id } = guitarData;
          dispatch(postCommentAction({
            guitarId: id,
            userName,
            advantage,
            disadvantage,
            comment,
            rating: Number(rating),
          }));
          actions.setSubmitting(false);
          actions.resetForm();
          handleModalClose();
        }}
      >
        {({ errors, touched }) => (
          <Form className="form-review">
            <div className="form-review__wrapper">
              <div className="form-review__name-wrapper">
                <label
                  className="form-review__label form-review__label--required"
                  htmlFor="user-name"
                >
                  Ваше Имя
                </label>
                <Field
                  id="user-name"
                  className="form-review__input form-review__input--name"
                  name="userName"
                  autoComplete="off"
                  type="text"
                />
                {errors.userName && touched.userName ? (
                  <p className="form-review__warning">{errors.userName}</p>
                ) : null}
              </div>

              <div>
                <span className="form-review__label form-review__label--required">Ваша Оценка</span>
                <div className="rate rate--reverse">
                  <Field className="visually-hidden" id="star-5" name="rating" type="radio" value="5" />
                  <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                  <Field className="visually-hidden" id="star-4" name="rating" type="radio" value="4" />
                  <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                  <Field className="visually-hidden" id="star-3" name="rating" type="radio" value="3" />
                  <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                  <Field className="visually-hidden" id="star-2" name="rating" type="radio" value="2" />
                  <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                  <Field className="visually-hidden" id="star-1" name="rating" type="radio" value="1" />
                  <label className="rate__label" htmlFor="star-1" title="Ужасно"></label>
                  {errors.rating && touched.rating ? (
                    <p className="rate__message">{errors.rating}</p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="form-review__wrapper-regular">
              <label className="form-review__label form-review__label--required" htmlFor="adv">
                Достоинства
              </label>
              <Field
                className="form-review__input"
                id="adv"
                autoComplete="off"
                name="advantage"
              />
              {errors.advantage && touched.advantage ? (
                <p className="form-review__warning">{errors.advantage}</p>
              ) : null}
            </div>


            <label className="form-review__label form-review__label--required" htmlFor="disadv">
              Недостатки
            </label>
            <Field
              className="form-review__input"
              id="disadv"
              name="disadvantage"
              autoComplete="off"
            />
            {errors.disadvantage && touched.disadvantage ? (
              <p className="form-review__warning">{errors.disadvantage}</p>
            ) : null}

            <label className="form-review__label form-review__label--required" htmlFor="comment">
              Комментарий
            </label>
            <Field
              className="form-review__input form-review__input--textarea"
              id="comment"
              name="comment"
              rows={10}
              autoComplete="off"
              type="textarea"
            />
            {errors.comment && touched.comment ? (
              <p className="form-review__warning">{errors.comment}</p>
            ) : null}

            <button className="button button--medium-20 form-review__button" type="submit">
              Отправить отзыв
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default ReviewForm;
