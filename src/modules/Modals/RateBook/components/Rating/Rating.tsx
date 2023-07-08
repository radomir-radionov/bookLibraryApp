import dataTestId from 'constants/dataTestId';

import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';

import { Container, EmptyStarIcon, Input, Label, RatingStyled, StarIcon, SubTitle } from './styles';

type TProps = {
  defaultRating: number;
  control: Control<any, any>;
};

const Rating = ({ defaultRating, control }: TProps) => {
  const [rating, setRating] = useState(defaultRating);
  const qtyStars = [1, 2, 3, 4, 5];

  return (
    <Container>
      <SubTitle>Ваша оценка</SubTitle>
      <RatingStyled data-test-id={dataTestId.RATING}>
        {qtyStars.map((value) => (
          <Label key={value} data-test-id={dataTestId.STAR}>
            <Controller
              name='rating'
              control={control}
              defaultValue={1}
              rules={{ required: true }}
              render={({ field }) => (
                <Input
                  type='radio'
                  value={value}
                  checked={rating === value}
                  onChange={() => {
                    setRating(value);
                    field.onChange(value);
                  }}
                />
              )}
            />
            {value <= rating ? <StarIcon data-test-id={dataTestId.STAR_ACTIVE} /> : <EmptyStarIcon />}
          </Label>
        ))}
      </RatingStyled>
    </Container>
  );
};

export default Rating;
