import { ReviewData } from './review';

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

export type CatalogData = {
  guitars: GuitarData[];
  comments: ReviewData[];
  isDataLoaded: boolean;
  isCommentsLoaded: boolean;
  curPagination: number;
  guitarNumber: number;
  curGuitar: GuitarData | null;
};
