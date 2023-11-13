import { TReviewUser } from './review-user';

export type TReview = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: TReviewUser;
}
