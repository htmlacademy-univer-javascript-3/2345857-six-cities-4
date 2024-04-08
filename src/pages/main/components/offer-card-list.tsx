import { FC, useState } from 'react';
import { Offer } from '../../../types/offer';
import { Link } from 'react-router-dom';
import { OfferCard } from './offer-card';

type OfferCardListProps = {
    offers: Offer[];
}

export const OfferCardList: FC<OfferCardListProps> = ({ offers}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focusedCard, setFocusedCard] = useState<string | null>(null);

  const handleCardFocus = (id: string) => {
    setFocusedCard(id);
  };

  const handleCardUnfocus = () => {
    setFocusedCard(null);
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((offer) => (
          <Link key={`card-${offer.id}`} to={`/offer/${offer.id}`}>
            <OfferCard offer={offer} onMouseEnter={() => handleCardFocus(offer.id)} onMouseLeave={() => handleCardUnfocus} />
          </Link>
        ))
      }
    </div>
  );
};
