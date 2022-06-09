export type RateProps = {
  stringCount: number;
  rating: number;
  cardType: string;
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

export type GuitarsData = GuitarData[];

export type CatalogData = {
  guitars: GuitarData[];
  isDataLoaded: boolean;
  curPagination: number;
  guitarNumber: number;
  curGuitar: GuitarData | null;
};
