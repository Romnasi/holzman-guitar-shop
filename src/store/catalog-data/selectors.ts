import { NameSpace } from '../../const/store';
import { State } from '../../types/state';
import { GuitarsData } from '../../types/card-data';
import { ReviewData } from '../../types/review';

export const getGuitars = (state: State): GuitarsData => state[NameSpace.data].guitars;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;
export const getLoadedCommentsStatus = (state: State): boolean => state[NameSpace.data].isCommentsLoaded;
export const getGuitarNumber = (state: State): number => state[NameSpace.data].guitarNumber;
export const getCurPagination = (state: State): number => state[NameSpace.data].curPagination;
export const getComments = (state: State): ReviewData[] => state[NameSpace.data].comments;
