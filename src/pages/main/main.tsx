import { Helmet } from 'react-helmet-async';

import { Cities } from '../../components/cities';
import { CitiesList } from '../../components/cities-list';

import { useAppSelector } from '../../hooks';

export function Main (): JSX.Element {
  const offers = useAppSelector((state) => state.offers);
  const activeCity = useAppSelector((state) => state.activeCity);

  const offersByActiveCity = offers.filter((offer) => offer.city.name === activeCity.name);

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            activeCity={activeCity.name}
          />
        </div>
        <Cities
          offers={offersByActiveCity}
          activeCity={activeCity}
        />
      </main>
    </div>
  );
}
