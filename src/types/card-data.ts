export type RateProps = {
  stringCount: number;
  rating: number;
  classNames: string;
}

export type CardDataProps = {
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

export type GuitarsData = CardDataProps[];

export type CatalogData = {
  guitars: CardDataProps[];
  isDataLoaded: boolean;
  curPagination: number;
  guitarNumber: number;
  curGuitar: CardDataProps | null;
};
