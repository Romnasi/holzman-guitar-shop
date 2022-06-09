import {createAction} from '@reduxjs/toolkit';
import {ActionType} from '../types/action';
import { AppRoute } from '../const/app-route';
import { CardDataProps } from '../types/card-data';

export const loadGuitars = createAction(
  ActionType.LoadGuitars,
  (guitars: CardDataProps[]) => ({
    payload: {
      guitars,
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
  (curGuitar: CardDataProps) => ({
    payload: {
      curGuitar,
    },
  }),
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute) => ({
    payload: url,
  }),
);
