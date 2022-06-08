import { APIRoute } from '../const/api';
import {ThunkActionResult} from '../types/action';
import { CardDataProps } from '../types/card-data';
import { loadGuitars } from './action';

export const fetchGuitarsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<CardDataProps[]>(APIRoute.GUITARS);
    dispatch(loadGuitars(data));
  };
