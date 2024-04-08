import { Currency } from '../types/currency';
import { OfferData } from '../types/offer-data';
import { PlaceType } from '../types/place-type';

export const MOCK_OFFERS: OfferData[] = [
  {
    id: 1,
    mark: 'Premium',
    image: 'img/apartment-01.jpg',
    currency: Currency.EUR,
    price: 120,
    priceText: 'night',
    isBookmarked: false,
    rating: 80,
    name: 'Beautiful &amp; luxurious apartment at great location',
    type: PlaceType.APARTMENT
  },
  {
    id: 2,
    image: 'img/room.jpg',
    currency: Currency.USD,
    price: 80,
    priceText: 'night',
    isBookmarked: true,
    rating: 80,
    name: 'Wood and stone place',
    type: PlaceType.ROOM
  },
  {
    id: 3,
    image: 'img/apartment-02.jpg',
    currency: Currency.RUB,
    price: 132,
    priceText: 'night',
    isBookmarked: false,
    rating: 80,
    name: 'Canal View Prinsengracht',
    type: PlaceType.APARTMENT
  },
  {
    id: 4,
    mark: 'Premium',
    image: 'img/apartment-03.jpg',
    currency: Currency.EUR,
    price: 180,
    priceText: 'night',
    isBookmarked: false,
    rating: 100,
    name: 'Nice, cozy, warm big bed apartment',
    type: PlaceType.APARTMENT
  },
  {
    id: 5,
    image: 'img/room.jpg',
    currency: Currency.EUR,
    price: 80,
    priceText: 'night',
    isBookmarked: true,
    rating: 80,
    name: 'Wood and stone place',
    type: PlaceType.ROOM
  }
];
