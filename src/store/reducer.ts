import { createReducer } from '@reduxjs/toolkit';

import { dropOffer, fetchFavorites, fetchNearPlaces, fetchOffer, fetchOffers, fetchReviews, setActiveCity } from './actions';

import { CityMap } from '../const';

import { TOfferPreview } from '../types/offer-preview';
import { TReview } from '../types/review';
import { TOffer } from '../types/offer';
import { TCity } from '../types/city';

import { reviews } from '../mocks/reviews';
import { offers } from '../mocks/offers';

const initialState: {
  offers: TOfferPreview[];
  nearPlaces: TOfferPreview[];
  reviews: TReview[];
  offer: TOffer | null;
  favorites: TOfferPreview[];
  activeCity: TCity;
} = {
  offers,
  nearPlaces: [],
  reviews: [],
  offer: null,
  favorites: [],
  activeCity: CityMap.Paris,
};


export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOffers, (state) => {
      state.offers = offers;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = offers.find((offer) => offer.id === action.payload) ?? null;
    })
    .addCase(fetchNearPlaces, (state, action) => {
      state.nearPlaces = offers.filter((offer) => offer.id !== action.payload);
    })
    .addCase(fetchReviews, (state) => {
      state.reviews = reviews;
    })
    .addCase(dropOffer, (state) => {
      state.offer = null;
      state.nearPlaces = [];
    })
    .addCase(setActiveCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(fetchFavorites, (state) => {
      state.favorites = state.offers.filter((offer) => offer.isFavorite);
    });
});
