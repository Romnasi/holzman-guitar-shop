import { APIRoute } from '../const/api';
import { ThunkActionResult } from '../types/action';
import { GuitarData } from '../types/card-data';
import { addComment, loadComments, loadGuitars } from './action';
import { ReviewData, ReviewPostData } from '../types/review';

export const fetchGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<GuitarData[]>(APIRoute.GUITARS);
    dispatch(loadGuitars(data));
  };

export const fetchCommentsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<ReviewData[]>(APIRoute.COMMENTS);
    dispatch(loadComments(data));
  };

export const postCommentAction = (reviewPostData: ReviewPostData): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ReviewData>(APIRoute.COMMENTS, { ...reviewPostData });
    dispatch(addComment(data));
  };
