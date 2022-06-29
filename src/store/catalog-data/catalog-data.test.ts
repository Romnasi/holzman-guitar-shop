import { catalogData } from './catalog-data';
import { PaginationData } from '../../const/pagination';
import { mockGuitars, mockComments } from '../../const/mock';
import { addComment, addCurGuitar, changeCurPagination, loadComments, loadGuitars } from '../action';
import { defaultSortType } from '../../const/sort';

const initialState = {
  guitars: [],
  comments: [],
  isDataLoaded: false,
  isCommentsLoaded: false,
  curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
  guitarNumber: 0,
  curGuitar: null,
  sortType: defaultSortType,
};

describe('Reducer: catalogData', () => {
  it('without additional parameters should return initial state', () => {
    expect(catalogData(void 0, { type: 'UNKNOWN_ACTION' }))
      .toEqual(initialState);
  });

  it('should change guitarNumber, update guitars by load guitars', () => {
    expect(catalogData(initialState, loadGuitars(mockGuitars)))
      .toEqual({
        guitars: mockGuitars,
        comments: [],
        isDataLoaded: true,
        isCommentsLoaded: false,
        curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
        guitarNumber: mockGuitars.length,
        curGuitar: null,
        sortType: defaultSortType,
      });
  });

  it('should update comments by load comments', () => {
    expect(catalogData(initialState, loadComments(mockComments)))
      .toEqual({
        guitars: [],
        comments: mockComments,
        isDataLoaded: false,
        isCommentsLoaded: true,
        curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
        guitarNumber: 0,
        curGuitar: null,
        sortType: defaultSortType,
      });
  });

  it('should change current pagination', () => {
    const testPaginationNumber = 3;
    expect(catalogData(initialState, changeCurPagination(testPaginationNumber)))
      .toEqual({
        guitars: [],
        comments: [],
        isDataLoaded: false,
        isCommentsLoaded: false,
        curPagination: testPaginationNumber,
        guitarNumber: 0,
        curGuitar: null,
        sortType: defaultSortType,
      });
  });

  it('should update the current guitar data from selected', () => {
    const testCurGuitar = mockGuitars[0];
    expect(catalogData(initialState, addCurGuitar(testCurGuitar)))
      .toEqual({
        guitars: [],
        comments: [],
        isDataLoaded: false,
        isCommentsLoaded: false,
        curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
        guitarNumber: 0,
        curGuitar: testCurGuitar,
        sortType: defaultSortType,
      });
  });

  it('should add comment', () => {
    const testComment = mockComments[0];
    expect(catalogData(initialState, addComment(testComment)))
      .toEqual({
        guitars: [],
        comments: [testComment],
        isDataLoaded: false,
        isCommentsLoaded: false,
        curPagination: PaginationData.DEFAULT_ACTIVE_PAGE,
        guitarNumber: 0,
        curGuitar: null,
        sortType: defaultSortType,
      });
  });
});
