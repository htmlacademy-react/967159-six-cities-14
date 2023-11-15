import { TOfferPreview } from '../types/offer-preview';
import { TSorting } from '../types/sorting';

export function getRatingWidth (rating: number): string {
  const FIFTH_PART = 20;
  return `${Math.round(rating) * FIFTH_PART}%`;
}

function sortByRating (a: TOfferPreview, b: TOfferPreview) {
  return b.rating - a.rating;
}

function sortLowToHigh (a: TOfferPreview, b: TOfferPreview) {
  return a.price - b.price;
}

function sortHighToLow (a: TOfferPreview, b: TOfferPreview) {
  return b.price - a.price;
}

export const sorting: Record<TSorting, (offers: TOfferPreview[]) => TOfferPreview[]> = {
  Popular: (offers: TOfferPreview[]) => offers.slice(),
  LowToHigh: (offers: TOfferPreview[]) => offers.slice().sort(sortLowToHigh),
  HighToLow: (offers: TOfferPreview[]) => offers.slice().sort(sortHighToLow),
  TopRated: (offers: TOfferPreview[]) => offers.slice().sort(sortByRating),
};
