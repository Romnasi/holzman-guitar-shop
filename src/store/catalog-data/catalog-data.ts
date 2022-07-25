import { createReducer } from '@reduxjs/toolkit';
import { CatalogData } from '../../types/card-data';
import { PaginationData } from '../../const/pagination';
import { defaultSortType } from '../../const/sort';
import {
  addComment,
  addCurGuitar,
  changeCurPagination,
  changeGuitarNumber,
  changeSortType,
  loadComments,
  loadGuitars
} from '../action';

const initialState: CatalogData = {
  guitars: [],
  comments: [],
  isDataLoaded: false,
  isCommentsLoaded: false,
  curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
  guitarNumber: 0,
  curGuitar: null,
  sortType: defaultSortType,
};

const catalogData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const {guitars} = action.payload;

      state.guitars = guitars;
      state.isDataLoaded = true;
      state.guitarNumber = guitars.length;
    })
    .addCase(changeGuitarNumber, (state, action) => {
      const {guitarNumber} = action.payload;

      state.guitarNumber = guitarNumber;
    })
    .addCase(changeCurPagination, (state, action) => {
      const {curPagination} = action.payload;

      state.curPagination = curPagination;
    })
    .addCase(addCurGuitar, (state, action) => {
      const {curGuitar} = action.payload;

      state.curGuitar = curGuitar;
    })
    .addCase(loadComments, (state, action) => {
      const {comments} = action.payload;

      state.comments = comments;
      state.isCommentsLoaded = true;
    }).addCase(addComment, (state, action) => {
      const {comment} = action.payload;

      state.comments = [...state.comments, comment];
    }).addCase(changeSortType, (state, action) => {
      const {sortType} = action.payload;

      state.sortType = sortType;
    });
});

export {catalogData};
