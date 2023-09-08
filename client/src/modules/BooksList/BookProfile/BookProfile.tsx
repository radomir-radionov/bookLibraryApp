import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userActions } from 'redux/user';
import { enteredBookName } from 'redux/user/selectors';
import { Button, HighLight, RatingList } from 'components';
import { BUTTON_VARIANTS } from 'types/button';
import { formatDateButton } from 'utils/formatDate';

import {
  Active,
  Author,
  BookStyled,
  CatIcon,
  DeliveryText,
  Img,
  ImgBox,
  ImgWrapper,
  Info,
  NameBox,
  SubTitleWrapper,
} from './styles';

type BookProfileProps = {
  data: any;
};

const BookProfile = ({ data }: BookProfileProps) => {
  const dispatch = useDispatch();
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { id, title, authors, rating, issueYear, image } = data.book;

  const imgSrc = `${image}`;

  const handleNavigateClick = () => navigate(`/books/all/${id}`);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    // dispatch(userActions.deletelBooking(data?.id));
  };

  return (
    <BookStyled onClick={handleNavigateClick} data-test-id={dataTestId.CARD}>
      <ImgWrapper>
        {image ? (
          <Img src={imgSrc} alt='Book cover' />
        ) : (
          <ImgBox>
            <CatIcon />
          </ImgBox>
        )}
      </ImgWrapper>
      <Info>
        <NameBox>
          <SubTitleWrapper>
            <HighLight text={title} searcheText={enteredText} />
          </SubTitleWrapper>
          <Author>
            {authors?.map((author: any) => author)}, {issueYear}
          </Author>
        </NameBox>
        <Active>
          <RatingList rating={rating} />
          {data && data?.dateHandedTo ? (
            <DeliveryText>возврат {formatDateButton(data?.dateHandedTo.toString() || '')}</DeliveryText>
          ) : (
            <Button onClick={handleClick} variant={BUTTON_VARIANTS.SMALL} dataTestId={dataTestId.BOOKING_CANCEL_BUTTON}>
              отменить бронь
            </Button>
          )}
        </Active>
      </Info>
    </BookStyled>
  );
};

export default BookProfile;
