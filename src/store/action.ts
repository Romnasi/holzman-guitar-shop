import { createAction } from '@reduxjs/toolkit';
import { ActionType } from '../types/action';
import { AppRoute } from '../const/app-route';
import { CatalogSortType, GuitarData } from '../types/card-data';
import { ReviewData } from '../types/review';

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
