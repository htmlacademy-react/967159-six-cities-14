export type CardProps = {
  bedrooms: number;
  city: {
    location: Location;
    name: string;
  };
  description: string;
  goods: string[];
  host: Host;
  id: number;
  images: PhotoUrl[];
  isFavorite: boolean;
  isPremium: boolean;
  location: Location;
  maxAdults: number;
  previewImage: PhotoUrl;
  price: number;
  rating: number;
  title: string;
  type: TypeOfHousing;
}

type Location = {
  latitude: number;
  longitude: number;
  zoom: number;
}

type Host = {
  avatarUrl: PhotoUrl;
  id: number;
  isPro: boolean;
  name: string;
};

type PhotoUrl = string;

type TypeOfHousing = 'apartment ' | 'room ' | 'house ' | 'hotel';

