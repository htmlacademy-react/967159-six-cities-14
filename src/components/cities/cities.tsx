import { useState } from 'react';

import classNames from 'classnames';

import { Card } from '../card';

import { TOfferPreview } from '../../types/offer-preview';

import { addPluralEnding } from '../../utils/common';
import { CityName } from '../../const';
import { Map } from '../map';

type TCitiesProps = {
  offers: TOfferPreview[];
}

export function Cities ({ offers }: TCitiesProps): JSX.Element {
  const filters = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  const activeFilter = 'Popular';

  const [hoveredOfferId, setHoveredOfferId] = useState<TOfferPreview['id'] | null>(null);

  const activeCity = CityName.Amsterdam;

  function handleCardHover (offerId: TOfferPreview['id'] | null) {
    setHoveredOfferId(offerId);
  }

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {offers.length} place{addPluralEnding(offers.length)} to stay in  {activeCity}
          </b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by </span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width={7} height={4}>
                <use xlinkHref="#icon-arrow-select" />
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              {
                filters.map((item) => (
                  <li
                    className={classNames('places__option', {'places__option--active': item === activeFilter})}
                    tabIndex={0}
                    key={item}
                  >
                    {item}
                  </li>
                ))
              }
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {
              offers.map((offer) => (
                <Card
                  key={offer.id}
                  offer={offer}
                  className="cities"
                  onCardHover={handleCardHover}
                />
              ))
            }
          </div>
        </section>
        <div className="cities__right-section">
          <Map activePin={hoveredOfferId}/>
        </div>
      </div>
    </div>
  );
}
