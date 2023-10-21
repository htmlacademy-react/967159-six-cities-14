import classNames from 'classnames';

type CardClassNameProps = {
  className: 'cities' | 'near-places' | 'favorites';
}

export function Card ({className}: CardClassNameProps): JSX.Element {
  return (
    <article className={`${className}__card place-card`}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img
            className="place-card__image"
            src="img/apartment-01.jpg"
            width={className === 'favorites' ? 150 : 260}
            height={className === 'favorites' ? 110 : 200}
            alt="Place image"
          />
        </a>
      </div>
      <div className={classNames({'favorites__card-info': className === 'favorites'}, {'place-card__info': true})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€120</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={classNames('place-card__bookmark-button button', {'place-card__bookmark-button--active': className === 'favorites'})}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            Beautiful &amp; luxurious apartment at great location
          </a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}