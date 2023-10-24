import { Helmet } from 'react-helmet-async';
import { Card } from '../../components/card';
import { Footer } from '../../components/footer/';

export function Favorites (): JSX.Element {
  const CARD_CLASSNAME = 'favorites';

  const cities = [{name: 'Amsterdam', count: 2}, {name: 'Cologne', count: 1}];

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
                cities.map((city) => (
                  <li className="favorites__locations-items" key={city?.name}>
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city?.name}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {
                        Array.from({length: city.count}, () => <Card key={Date.now() + Math.random()} className={CARD_CLASSNAME}/>)
                      }
                    </div>
                  </li>
                ))
              }
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
