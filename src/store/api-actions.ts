import { APIRoute } from '../const/api';
import { ThunkActionResult } from '../types/action';
import { GuitarData } from '../types/card-data';
import { addComment, addDiscount, changeCouponStatus, loadComments, loadGuitars } from './action';
import { ReviewData, ReviewPostData } from '../types/review';
import { errorHandle } from '../services/error-handle';

export const fetchGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<GuitarData[]>(APIRoute.GUITARS);
      dispatch(loadGuitars(data));
    } catch (error) {
      errorHandle(error);
    }
  };

export const fetchCommentsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.get<ReviewData[]>(APIRoute.COMMENTS);
      dispatch(loadComments(data));
    } catch (error) {
      errorHandle(error);
    }
  };

export const postCommentAction = (reviewPostData: ReviewPostData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.post<ReviewData>(APIRoute.COMMENTS, { ...reviewPostData });
      dispatch(addComment(data));
    } catch (error) {
      errorHandle(error);
    }
  };

export const postCouponAction = (coupon: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const { data } = await api.post<number>(APIRoute.COUPONS, { coupon });
      dispatch(addDiscount(data));
      dispatch(changeCouponStatus(true));
    } catch (error) {
      dispatch(changeCouponStatus(false));
    }
  };
