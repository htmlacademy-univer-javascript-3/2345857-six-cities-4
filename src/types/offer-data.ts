import { Currency } from './currency';
import { PlaceType } from './place-type';

export type OfferData = {
    id: number;
    mark?: string;
    image: string;
    currency: Currency;
    price: number;
    priceText: string;
    isBookmarked: boolean;
    rating: number;
    name: string;
    type: PlaceType;
}
