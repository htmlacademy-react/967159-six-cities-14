import { Helmet } from 'react-helmet-async';
import classNames from 'classnames';

import { TOfferPreview } from '../../types/offer-preview';

import { Cities } from '../../components/cities';

type TMainProps = {
  offers: TOfferPreview[];
}

export function Main ({ offers }: TMainProps): JSX.Element {
  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const activeTown = 'Amsterdam';

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>{'6 cities'}</title>
      </Helmet>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <ul className="locations__list tabs__list">
              {
                cities.map((item) => (
                  <li className="locations__item" key={item}>
                    <a
                      className={classNames('locations__item-link tabs__item', {'tabs__item--active': item === activeTown})}
                      href="#"
                    >
                      <span>{item}</span>
                    </a>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
        <Cities offers={offers}/>
      </main>
    </div>
  );
}
