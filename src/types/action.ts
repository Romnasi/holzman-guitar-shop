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
  ChangeGuitarNumber = 'data/changeGuitarNumber',
  ChangePriceMin = 'filter/changePriceMin',
  ChangePriceMax = 'filter/changePriceMax',
  ChangeMinMax = 'filter/changeMinMax',
  ChangeFilterStatus = 'filter/changeFilterStatus',
  ChangeFilterType = 'filter/changeFilterType',
  ChangeFilterStrings = 'filter/changeFilterStrings',
  ResetFilterState = 'filter/resetFilterState',
  AddGuitarToCard = 'cart/addGuitarToCard',
  ChangeCartCounter = 'cart/changeCartCounter',
  DeleteProduct = 'cart/deleteProduct',
  AddDiscount = 'cart/addDiscount',
  AddCoupon = 'cart/addCoupon',
  ChangeCouponStatus = 'cart/changeCouponStatus',
  RedirectToRoute = 'ui/redirectToRoute',
}

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Action>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Action>;
