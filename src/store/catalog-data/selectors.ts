import { NameSpace } from '../../const/store';
import { State } from '../../types/state';
import { GuitarsData, CurGuitar, CatalogSortType } from '../../types/card-data';
import { ReviewData } from '../../types/review';

export const getGuitars = (state: State): GuitarsData => state[NameSpace.DATA].guitars;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.DATA].isDataLoaded;
export const getLoadedCommentsStatus = (state: State): boolean => state[NameSpace.DATA].isCommentsLoaded;
export const getGuitarNumber = (state: State): number => state[NameSpace.DATA].guitarNumber;
export const getCurPagination = (state: State): number => state[NameSpace.DATA].curPagination;
export const getComments = (state: State): ReviewData[] => state[NameSpace.DATA].comments;
export const getCurGuitar = (state: State): CurGuitar => state[NameSpace.DATA].curGuitar;
export const getSortType = (state: State): CatalogSortType => state[NameSpace.DATA].sortType;
