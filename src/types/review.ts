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

export type ReviewPostData = {
  guitarId: number;
  userName: string;
  advantage: string;
  disadvantage: string;
  comment:string;
  rating: number;
}

export type ReviewsComponent = {
  reviewsData: ReviewData[];
}

export type ReviewFormValues = {
  userName: string;
  rating: string;
  advantage: string;
  disadvantage: string;
  comment: string;
}

export type ReviewFormComponent = {
  handleModalClose: () => void;
}
