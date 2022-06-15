import { createReducer } from '@reduxjs/toolkit';
import { addComment, addCurGuitar, changeCurPagination, loadComments, loadGuitars } from '../action';
import { CatalogData } from '../../types/card-data';
import { PaginationData } from '../../const/pagination';

const initialState: CatalogData = {
  guitars: [],
  comments: [],
  isDataLoaded: false,
  isCommentsLoaded: false,
  curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
  guitarNumber: 0,
  curGuitar: null,
};

const catalogData = createReducer(initialState, (builder) => {
  builder
    .addCase(loadGuitars, (state, action) => {
      const {guitars} = action.payload;

      state.guitars = guitars;
      state.isDataLoaded = true;
      state.guitarNumber = guitars.length;
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
    });
});

export {catalogData};
