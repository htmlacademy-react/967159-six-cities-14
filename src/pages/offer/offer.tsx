import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { OfferDetails } from '../../components/offer-details';
import { Map } from '../../components/map';

import { AppRoute, NEAR_PLACES_COUNT } from '../../const';

import { TOffer } from '../../types/offer';
import { NearPlaces } from '../../components/near-places';


type TOfferProps = {
  offers: TOffer[];
}

export function Offer ({ offers }: TOfferProps): JSX.Element {
  const { offerId } = useParams();
  const offer = offers.find((item) => item.id === offerId);

  if (!offer) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  // TODO: Временная переменная, потом в Map offersForMap заменить на [...offers.slice..., offer]
  const offersForMap = offers.filter((item) => item.id !== offer.id);

  return (
    <div className="page">
      <Helmet>
        <title>{`6 cities: ${offer.title}`}</title>
      </Helmet>
      <main className="page__main page__main--offer">
        <section className="offer">
          <OfferDetails offer={offer} />
          <Map
            block="offer"
            location={offer.city.location}
            offers={[...offersForMap.slice(0, NEAR_PLACES_COUNT), offer]}
            specialOfferId={offer.id}
          />
        </section>
        <div className="container">
          <NearPlaces offers={offers.slice(0, NEAR_PLACES_COUNT)} />
        </div>
      </main>
    </div>
  );
}

