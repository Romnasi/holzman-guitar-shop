import { APIRoute } from '../const/api';
import { ThunkActionResult } from '../types/action';
import { GuitarData, ReviewData } from '../types/card-data';
import { loadComments, loadGuitars } from './action';

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
