import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { OfferDetails } from '../../components/offer-details';

import { Card } from '../../components/card';
import { TOffer } from '../../types/offer';
import { AppRoute } from '../../const';

type TOfferProps = {
  offers: TOffer[];
}

export function Offer ({ offers }: TOfferProps): JSX.Element {
  const { offerId } = useParams();
  const offer = offers.find((item) => item.id === offerId);

  const NEAR_PLACES_COUNT = 3;

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities: ${offer.title}`}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} />
          <section className="offer__map map" />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {
                Array.from({length: NEAR_PLACES_COUNT}, () => <Card key={Date.now() + Math.random()} offer={offer} className="near-places"/>)
              }
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
