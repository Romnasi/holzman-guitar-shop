export type RateProps = {
  rating: number;
  cardType: string;
  guitarId: number;
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

export type ReviewData = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  comment:string;
  rating: number;
  createAt: Date,
  guitarId: number;
}

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
