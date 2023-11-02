import { CityName } from '../const';
import { TOffer } from '../types/offer';

export const offers: TOffer[] = [
  {
    city: {
      name: CityName.Cologne,
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/10.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/15.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg'
    ],
    title: 'Amazing and Extremely Central Flat',
    isFavorite: true,
    isPremium: false,
    rating: 4.4,
    type: 'room',
    bedrooms: 1,
    maxAdults: 1,
    price: 200,
    goods: [
      'Breakfast',
      'Laptop friendly workspace'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 50.960361,
      longitude: 6.967974,
      zoom: 16
    },
    id: '87'
  },
  {
    city: {
      name: CityName.Amsterdam,
      location: {
        'latitude': 52.37454,
        'longitude': 4.897976,
        'zoom': 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/11.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/19.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/16.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg'
    ],
    title: 'Perfectly located Castro',
    isFavorite: false,
    isPremium: false,
    rating: 4.9,
    type: 'house',
    bedrooms: 1,
    maxAdults: 6,
    price: 565,
    goods: [
      'Washing machine',
      'Breakfast',
      'Dishwasher',
      'Air conditioning',
      'Laptop friendly workspace',
      'Towels',
      'Coffee machine',
      'Baby seat',
      'Washer',
      'Fridge'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 52.388540000000006,
      longitude: 4.899976,
      zoom: 16
    },
    id: '88'
  },
  {
    city: {
      name: CityName.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/15.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/10.jpg',
      'https://14.react.pages.academy/static/offer/20.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/12.jpg'
    ],
    title: 'Nice, cozy, warm big bed apartment',
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
    type: 'house',
    bedrooms: 1,
    maxAdults: 2,
    price: 210,
    goods: [
      'Air conditioning',
      'Laptop friendly workspace',
      'Breakfast',
      'Towels',
      'Baby seat',
      'Washer',
      'Fridge'
    ],
    host: {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    'location': {
      latitude: 50.827557,
      longitude: 4.336697,
      zoom: 16
    },
    id: '89'
  },
  {
    city: {
      name: CityName.Brussels,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    previewImage: 'https://14.react.pages.academy/static/offer/17.jpg',
    images: [
      'https://14.react.pages.academy/static/offer/17.jpg',
      'https://14.react.pages.academy/static/offer/5.jpg',
      'https://14.react.pages.academy/static/offer/14.jpg',
      'https://14.react.pages.academy/static/offer/9.jpg',
      'https://14.react.pages.academy/static/offer/1.jpg',
      'https://14.react.pages.academy/static/offer/6.jpg',
      'https://14.react.pages.academy/static/offer/7.jpg',
      'https://14.react.pages.academy/static/offer/11.jpg',
      'https://14.react.pages.academy/static/offer/8.jpg',
      'https://14.react.pages.academy/static/offer/4.jpg',
      'https://14.react.pages.academy/static/offer/2.jpg',
      'https://14.react.pages.academy/static/offer/13.jpg',
      'https://14.react.pages.academy/static/offer/18.jpg',
      'https://14.react.pages.academy/static/offer/3.jpg'
    ],
    title: 'The house among olive ',
    isFavorite: false,
    isPremium: true,
    rating: 4.3,
    type: 'room',
    bedrooms: 1,
    maxAdults: 2,
    price: 171,
    goods: [
      'Laptop friendly workspace',
      'Breakfast',
      'Air conditioning',
      'Washer'
    ],
    'host': {
      id: 25,
      name: 'Angelina',
      isPro: true,
      avatarUrl: 'img/avatar-angelina.jpg'
    },
    description: 'Relax, rejuvenate and unplug in this ultimate rustic getaway experience in the country. In our beautiful screened Pondhouse, you can gaze at the stars and listen to the sounds of nature from your cozy warm bed.',
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16
    },
    id: '90'
  },
];
