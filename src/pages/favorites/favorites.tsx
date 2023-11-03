import { Helmet } from 'react-helmet-async';

import { Card } from '../../components/card';
import { Footer } from '../../components/footer/';

import { TOfferPreview } from '../../types/offer-preview';

type TFavoritesProps = {
  offers: TOfferPreview[];
}

function getFavoritesByCity (favorites: TOfferPreview[]) {
  return favorites.reduce<{ [key: string]: TOfferPreview[] }>((acc, curr) => {
    const city = curr.city.name;

    if (!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(curr);

    return acc;
  }, {});
}

export function Favorites ({ offers }: TFavoritesProps): JSX.Element {
  const CARD_CLASSNAME = 'favorites';

  const favoritesByCity = getFavoritesByCity(offers);

  return (
    <div className="page">
      <Helmet>
        <title>{'6 cities: favorites'}</title>
      </Helmet>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {
                Object.entries(favoritesByCity).map(
                  ([city, groupedFavorites]) => (
                    <li className="favorites__locations-items" key={city}>
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{city}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          groupedFavorites.map((offer) => (
                            <Card key={offer.id} className={CARD_CLASSNAME} offer={offer} size='small'/>
                          ))
                        }
                      </div>
                    </li>
                  )
                )
              }
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
