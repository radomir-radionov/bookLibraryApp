import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { displayingBooks } from 'redux/displayingContent/selectors';

import { EmptyStarIcon, RatingItem, RatingListStyled, RatingText, StarIcon } from './styles';

type RatingListProps = {
  rating: number | null;
};

const RatingList = ({ rating }: RatingListProps) => {
  const displayingData = useSelector(displayingBooks);
  const ratings = [0, 1, 2, 3, 4, 5];

  return (
    <RatingListStyled $visible={displayingData} data-test-id={dataTestId.RATING}>
      {rating === null ? (
        <RatingText>ещё нет оценок</RatingText>
      ) : (
        ratings?.map((item) => (
          <RatingItem key={item}>
            {item === 0 ? null : rating >= item ? (
              <StarIcon data-test-id={dataTestId.STAR_ACTIVE} />
            ) : (
              <EmptyStarIcon data-test-id={dataTestId.STAR} />
            )}
          </RatingItem>
        ))
      )}
    </RatingListStyled>
  );
};

export default RatingList;
