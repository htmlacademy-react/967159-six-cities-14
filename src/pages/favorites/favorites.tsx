import { Card } from '../../components/card';
import { Header } from '../../components/header';

export function Favorites (): JSX.Element {
  const CARD_CLASSNAME = 'favorites';

  const cities = [{name: 'Amsterdam', count: 2}, {name: 'Cologne', count: 1}];

  return (
    <div className="page">
      <Header />
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
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}
