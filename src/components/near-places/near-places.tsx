import { Card } from '../card';

import { TOfferPreview } from '../../types/offer-preview';


type TNearPlacesProps = {
  offers: TOfferPreview[];
}

export function NearPlaces ({ offers }: TNearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {
          offers.map((offer) => <Card key={offer.id} offer={offer} block="near-places"/>)
        }
      </div>
    </section>
  );
}
