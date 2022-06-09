import {Action} from 'redux';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import {State} from '../types/state';

export enum ActionType {
  LoadGuitars = 'data/loadGuitars',
  ChangeCurPagination = 'data/changeCurPagination',
  AddCurGuitar = 'data/addCurGuitar',
  RedirectToRoute = 'ui/redirectToRoute',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
