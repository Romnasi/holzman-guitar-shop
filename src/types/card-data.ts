import { ReviewData } from './review';
import { SortName, SortDirection } from '../const/sort';

export type RateProps = {
  rating: number;
  cardType: string;
  guitarId?: number;
}

export type GuitarData = {
  id: number;
  name: string;
  vendorCode: string;
  type: string,
  description: string,
  previewImg: string,
  stringCount: number;
  rating: number;
  price: number;
}

export type CurGuitar = GuitarData | null;

export type GuitarsData = GuitarData[];

export type CatalogSortType = {
  type: SortName;
  direction: SortDirection;
  isActive: boolean;
}

export type SortStateUpdate = {
  type?: SortName;
  direction?: SortDirection;
}

export type CatalogData = {
  guitars: GuitarData[];
  comments: ReviewData[];
  isDataLoaded: boolean;
  isCommentsLoaded: boolean;
  curPagination: number;
  guitarNumber: number;
  curGuitar: GuitarData | null;
  sortType: CatalogSortType;
};

export type GuitarTypes = {
  acoustic: string;
  electric: string;
  ukulele: string;
}
