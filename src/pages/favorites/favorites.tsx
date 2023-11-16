import { Helmet } from 'react-helmet-async';

import { Card } from '../../components/card';
import { Footer } from '../../components/footer/';

import { TOfferPreview } from '../../types/offer-preview';

import { useAppSelector } from '../../hooks';


function getFavoritesByCity (favorites: TOfferPreview[]) {
  return favorites.reduce<{ [key: string]: TOfferPreview[] }>((acc, offer: TOfferPreview) => {
    const city = offer.city.name;

    if (!(city in acc)) {
      acc[city] = [];
    }
    acc[city].push(offer);

    return acc;
  }, {});
}


export function Favorites (): JSX.Element {
  const favorites = useAppSelector((state) => state.favorites);
  const favoritesByCity = getFavoritesByCity(favorites);

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
                            <Card key={offer.id} block='favorites' offer={offer} size='small'/>
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
// TODO: сделать страницу для пустого списка
