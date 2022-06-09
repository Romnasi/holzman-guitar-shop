import { APIRoute } from '../const/api';
import {ThunkActionResult} from '../types/action';
import { GuitarData } from '../types/card-data';
import { loadGuitars } from './action';

export const fetchGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<GuitarData[]>(APIRoute.GUITARS);
    dispatch(loadGuitars(data));
  };

export const fetchComments = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<GuitarData[]>(APIRoute.GUITARS);
    dispatch(loadGuitars(data));
  };
