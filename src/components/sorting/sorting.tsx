import { useState, KeyboardEvent } from 'react';
import classNames from 'classnames';

import { TSorting } from '../../types/sorting';
import { SortingMap } from '../../const';


type SortingProps = {
  activeSorting: TSorting;
  onChange: (newSorting: TSorting) => void;
}


export function Sorting ({ activeSorting, onChange }: SortingProps): JSX.Element {
  const [isOpened, setIsOpened] = useState(false);

  const iconStyle = {
    transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`,
  };

  function handleKeydown (evt: KeyboardEvent) {
    const KEY_ESCAPE = 'Escape';

    if (evt.key === KEY_ESCAPE && isOpened) {
      evt.preventDefault();
      setIsOpened(false);
    }
  }

  function handleTypeClick () {
    setIsOpened((prevIsOpened) => !prevIsOpened);
  }

  function handleSortingItemClick (type: TSorting) {
    onChange(type);
    setIsOpened(false);
  }

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onKeyDown={handleKeydown}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleTypeClick}
      >
        {SortingMap[activeSorting]}
        <svg
          className="places__sorting-arrow"
          width={7}
          height={4}
          style={iconStyle}
        >
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom', {
          'places__options--opened': isOpened,
        })}
      >
        {(
          Object.entries(SortingMap) as [
            TSorting,
            (typeof SortingMap) [TSorting]
          ][]
        ).map(([type, label]) => (
          <li
            className={classNames('places__option', {
              'places__option--active': activeSorting === type,
            })}
            tabIndex={0}
            key={type}
            onClick={() => handleSortingItemClick(type)}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}
