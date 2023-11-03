import { RatingList, SubTitle } from 'components';
import { Container, RateBox, RateQty } from './styles';

type TRating = {
  rating: number | null;
};

const Rating = ({ rating }: TRating) => {
  return (
    <Container>
      <SubTitle>Рейтинг</SubTitle>
      <RateBox>
        <RatingList rating={rating} />
        <RateQty>{rating}</RateQty>
      </RateBox>
    </Container>
  );
};

export default Rating;
