import { Action } from 'redux';
import {
  ThunkAction,
  ThunkDispatch
} from 'redux-thunk';
import {
  AxiosInstance
} from 'axios';
import { State } from '../types/state';

export enum ActionType {
  LoadGuitars = 'data/loadGuitars',
  LoadComments = 'data/loadComments',
  AddComment = 'data/addComments',
  ChangeCurPagination = 'data/changeCurPagination',
  AddCurGuitar = 'data/addCurGuitar',
  ChangeSortType = 'data/changeSortType',
  ChangePriceMin = 'filter/changePriceMin',
  RedirectToRoute = 'ui/redirectToRoute',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
