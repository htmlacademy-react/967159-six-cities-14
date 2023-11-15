import { useState, useEffect } from 'react';

import { Card } from '../card';
import { Map } from '../map';
import { Sorting } from '../sorting';

import { TOfferPreview } from '../../types/offer-preview';
import { TCity } from '../../types/city';
import { TSorting } from '../../types/sorting';

import { OFFERS_COUNT, SortingMap } from '../../const';

import { addPluralEnding } from '../../utils/common';
import { sorting } from '../../utils/offer';


type TCitiesProps = {
  offers: TOfferPreview[];
  activeCity: TCity;
}

export function Cities ({ offers, activeCity }: TCitiesProps): JSX.Element {
  const [activeSorting, setActiveSorting] = useState<TSorting>(SortingMap.Popular);

  const [hoveredOfferId, setHoveredOfferId] = useState<TOfferPreview['id'] | null>(null);

  useEffect(() => {
    setActiveSorting(SortingMap.Popular);
  }, [activeCity]);

  function handleCardHover (offerId: TOfferPreview['id'] | null) {
    setHoveredOfferId(offerId);
  }

  function handleSortingClick (type: TSorting) {
    if (activeSorting !== type) {
      setActiveSorting(type);
    }
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} place{addPluralEnding(offers.length)} to stay in {activeCity.name}
          </b>
          <Sorting
            activeSorting={activeSorting}
            onChange={handleSortingClick}
          />
          <div className="cities__places-list places__list tabs__content">
            {
              sorting[activeSorting](offers).slice(0, OFFERS_COUNT).map((offer) => (
                <Card
                  key={offer.id}
                  offer={offer}
                  block="cities"
                  onCardHover={handleCardHover}
                />
              ))
            }
          </div>
        </section>
        <div className="cities__right-section">
          <Map
            block="cities"
            location={activeCity.location}
            offers={offers}
            specialOfferId={hoveredOfferId}
          />
        </div>
      </div>
    </div>
  );
}
// TODO: Сделать страницу для 0 предложений
