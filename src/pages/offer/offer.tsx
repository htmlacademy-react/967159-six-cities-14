import { useParams, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { dropOffer, fetchNearPlaces, fetchOffer } from '../../store/actions';

import { OfferDetails } from '../../components/offer-details';
import { Map } from '../../components/map';
import { NearPlaces } from '../../components/near-places';

import { AppRoute, NEAR_PLACES_COUNT } from '../../const';


export function Offer (): JSX.Element {
  const { offerId } = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector((state) => state.offer);
  const nearPlaces = useAppSelector((state) => state.nearPlaces);
  const nearPlacesToRender = nearPlaces.slice(0, NEAR_PLACES_COUNT);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchNearPlaces(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities: ${offer?.title ?? ''}`}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} />
          <Map
            block="offer"
            location={offer.city.location}
            offers={[...nearPlacesToRender, offer]}
            specialOfferId={offer.id}
          />
        </section>
        <div className="container">
          <NearPlaces offers={nearPlacesToRender} />
        </div>
      </main>
    </div>
  );
}
