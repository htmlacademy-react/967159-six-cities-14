import { MAX_REVIEWS_COUNT } from '../../const';

import { reviews } from '../../mocks/reviews';

import { Review } from '../review';
import { ReviewForm } from '../review-form';


export function ReviewsList (): JSX.Element {
  const reviewsToRender = [...reviews]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, MAX_REVIEWS_COUNT);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">
        Reviews · <span className="reviews__amount">{reviews.length}</span>
      </h2>
      <ul className="reviews__list">
        {
          reviewsToRender.map((review) => <Review key={review.id} review={review} />)
        }
      </ul>
      <ReviewForm />
    </section>
  );
}
