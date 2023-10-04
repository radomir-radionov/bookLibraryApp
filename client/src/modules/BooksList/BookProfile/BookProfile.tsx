import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
  Info,
  NameBox,
  SubTitleWrapper,
} from './styles';
import { bookingActions } from 'redux/booking/slice.js';

type BookProfileProps = {
  data: any;
};

const BookProfile = ({ data }: BookProfileProps) => {
  const dispatch = useDispatch();
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { id, title, authors, rating, issueYear, image } = data;
  const handleNavigateClick = () => navigate(`/books/all/${id}`);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.stopPropagation();
    dispatch(bookingActions.deleteBookingReq({ id }));
  };

  return (
    <BookStyled onClick={handleNavigateClick} data-test-id={dataTestId.CARD}>
      {image ? (
        <Img src={`http://localhost:5000/${image}`} alt='Book cover' />
      ) : (
        <ImgBox>
          <CatIcon />
        </ImgBox>
      )}
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
          {data.createdAt ? (
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
