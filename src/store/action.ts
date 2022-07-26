import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { AppRoute } from '../const/app-route';
import { CatalogSortType, GuitarData } from '../types/card-data';
import { ReviewData } from '../types/review';
import { MinMax, UpdateGuitarType, UpdateStrings } from '../types/filter';
import { CounterItem } from '../types/cart';

export const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars: GuitarData[]) => ({
    payload: {
      guitars,
    },
  }),
);

export const loadComments = createAction(
  ActionType.LoadComments,
  (comments: ReviewData[]) => ({
    payload: {
      comments,
    },
  }),
);

export const addComment = createAction(
  ActionType.AddComment,
  (comment: ReviewData) => ({
    payload: {
      comment,
    },
  }),
);

export const changeCurPagination = createAction(
  ActionType.ChangeCurPagination,
  (curPagination: number) => ({
    payload: {
      curPagination,
    },
  }),
);

export const addCurGuitar = createAction(
  ActionType.AddCurGuitar,
  (curGuitar: GuitarData) => ({
    payload: {
      curGuitar,
    },
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => ({
    payload: url,
  }),
);

export const changeSortType = createAction(
  ActionType.ChangeSortType,
  (sortType: CatalogSortType) => ({
    payload: {
      sortType,
    },
  }),
);

export const changePriceMin = createAction(
  ActionType.ChangePriceMin,
  (priceMin: number) => ({
    payload: {
      priceMin,
    },
  }),
);

export const changeGuitarNumber = createAction(
  ActionType.ChangeGuitarNumber,
  (guitarNumber: number) => ({
    payload: {
      guitarNumber,
    },
  }),
);

export const changePriceMax = createAction(
  ActionType.ChangePriceMax,
  (priceMax: number) => ({
    payload: {
      priceMax,
    },
  }),
);

export const changeMinMax = createAction(
  ActionType.ChangeMinMax,
  (minMax: MinMax) => ({ payload: { minMax } }),
);

export const changeFilterStatus = createAction(
  ActionType.ChangeFilterStatus,
  (isActive: boolean) => ({
    payload: {
      isActive,
    },
  }),
);

export const changeFilterType = createAction(
  ActionType.ChangeFilterType,
  (update: UpdateGuitarType) => ({
    payload: {
      update,
    },
  }),
);

export const changeFilterStrings = createAction(
  ActionType.ChangeFilterStrings,
  (update: UpdateStrings) => ({ payload: { update } }),
);

export const resetFilterState = createAction(ActionType.ResetFilterState);

export const addGuitarToCard = createAction(
  ActionType.AddGuitarToCard,
  (guitar: GuitarData) => ({ payload: { guitar } }),
);

export const changeCartCounter = createAction(
  ActionType.ChangeCartCounter,
  (counter: CounterItem) => ({ payload: { counter } }),
);
