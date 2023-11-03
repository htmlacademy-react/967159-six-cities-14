import classNames from 'classnames';
import { TOfferPreview } from '../../types/offer-preview';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { capitalize } from '../../utils/common';
import { getRatingWidth } from '../../utils/offer';

type TCardClassNameProps = 'cities' | 'near-places' | 'favorites';

type TCardImageSize = 'small' | 'large';

type TCardProps = {
  offer: TOfferPreview;
  className: TCardClassNameProps;
  size?: TCardImageSize;
  onCardHover?: (offerId: TOfferPreview['id'] | null) => void;
}

const sizeMap: Record<TCardImageSize, {width: string; height: string}> = {
  small: { width: '150', height: '110' },
  large: { width: '260', height: '200' },
};

export function Card ({ offer, className, size = 'large', onCardHover }: TCardProps): JSX.Element {
  const { isPremium, previewImage, id, price, rating, title, type } = offer;

  function handleMouseEnter () {
    onCardHover?.(id);
  }

  function handleMouseLeave () {
    onCardHover?.(null);
  }

  return (
    <article
      className={`${className}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${className}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            {...sizeMap[size]}
            alt={title}
          />
        </Link>
      </div>
      <div className={classNames({'favorites__card-info': className === 'favorites'}, {'place-card__info': true})}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={classNames('place-card__bookmark-button button', {'place-card__bookmark-button--active': className === 'favorites'})}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width={18} height={19}>
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRatingWidth(rating) }} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalize(type)}</p>
      </div>
    </article>
  );
}
