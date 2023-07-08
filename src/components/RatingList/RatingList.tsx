import dataTestId from 'constants/dataTestId';

import { useSelector } from 'react-redux';
import { displayingBooks } from 'redux/displayingContent/selectors';

import { EmptyStarIcon, RatingItem, RatingListStyled, Text, StarIcon } from './styles';

type TProps = {
  rating: number | null;
};

const RatingList = ({ rating }: TProps) => {
  const displayingData = useSelector(displayingBooks);
  const ratings = [0, 1, 2, 3, 4, 5];

  return (
    <RatingListStyled $visible={displayingData} data-test-id={dataTestId.RATING}>
      {rating ? (
        ratings?.map((item) => (
          <RatingItem key={item}>
            {item === 0 ? null : rating >= item ? (
              <StarIcon data-test-id={dataTestId.STAR_ACTIVE} />
            ) : (
              <EmptyStarIcon data-test-id={dataTestId.STAR} />
            )}
          </RatingItem>
        ))
      ) : (
        <Text>ещё нет оценок</Text>
      )}
    </RatingListStyled>
  );
};

export default RatingList;
