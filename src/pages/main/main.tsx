import classNames from 'classnames';
import { Card } from '../../components/card';

type MainProps = {
  offersCount: number;
}

export function Main ({offersCount}: MainProps): JSX.Element {
  const CARD_CLASSNAME = 'cities';

  const cities = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

  const filters = ['Popular', 'Price: low to high', 'Price: high to low', 'Top rated first'];

  const activeTown = 'Amsterdam';

  const activeFilter = 'Popular';

  return (
    <div className="page page--gray page--main">
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
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
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
                  Array.from({length: offersCount}, () => <Card key={Date.now() + Math.random()} className={CARD_CLASSNAME}/>)
                }
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
