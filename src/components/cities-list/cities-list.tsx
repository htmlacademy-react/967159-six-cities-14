import classNames from 'classnames';
import { CityMap, CityName } from '../../const';
import { TCity } from '../../types/city';
import { useAppDispatch } from '../../hooks';
import { setActiveCity } from '../../store/actions';

type TCitiesListProps = {
  activeCity: keyof typeof CityName;
}

export function CitiesList ({ activeCity }: TCitiesListProps): JSX.Element {
  const dispatch = useAppDispatch();

  function handleCityClick (newCity: TCity) {
    if (newCity.name !== activeCity) {
      dispatch(setActiveCity(newCity));
    }
  }

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {
          Object.entries(CityMap).map(([city, cityData]) => (
            <li className="locations__item" key={city}>
              <a
                className={classNames('locations__item-link tabs__item', {
                  'tabs__item--active': city === activeCity
                })}
                href="#"
                onClick={() => handleCityClick(cityData)}
              >
                <span>{city}</span>
              </a>
            </li>
          ))
        }
      </ul>
    </section>
  );
}
