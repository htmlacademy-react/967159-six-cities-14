import { TReview } from '../types/review';

export const reviews: TReview[] = [
  {
    id: '8011dc06-f43e-4026-b7fb-b5d827eb51c3',
    comment: 'The deluxe room was a quite comfortable one with all the adequate facilities. The only thing that made me feel uncomfortable was the rude behavior of an impolite staff at the reception desk.',
    date: '2023-10-19T21:00:00.225Z',
    rating: 2,
    user: {
      name: 'Sophie',
      avatarUrl: 'https://14.design.pages.academy/static/avatar/9.jpg',
      isPro: false
    }
  },
  {
    id: '854af289-0025-4e4f-bc28-ff111af29ff8',
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2023-10-17T21:00:00.225Z',
    rating: 2,
    user: {
      name: 'Isaac',
      avatarUrl: 'https://14.design.pages.academy/static/avatar/1.jpg',
      isPro: false
    }
  },
  {
    id: 'e547be19-65d8-4a10-8dcb-d95c7452ed59',
    comment: 'I stayed here for one night and it was an unpleasant experience.',
    date: '2023-10-17T21:00:00.225Z',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: 'https://14.design.pages.academy/static/avatar/1.jpg',
      isPro: true
    }
  }
];
