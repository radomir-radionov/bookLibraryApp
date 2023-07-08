import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bookActions } from 'redux/book';
import { modalActions } from 'redux/modal';
import { enteredBookName, selectUserComments } from 'redux/user/selectors';
import { Button, ButtonToBook, HighLight, RatingList } from 'components';
import { BookProps } from 'types/book';
import { BUTTON_VARIANTS } from 'types/button';
import { MODAL_TYPES } from 'types/modal';

import {
  Active,
  Author,
  BookItemStyled,
  CatIcon,
  Img,
  ImgBox,
  ImgWrapper,
  Info,
  NameBox,
  SubTitleWrapper,
} from './styles';

type TProps = {
  data: BookProps;
  view?: 'history';
};

const BookLong = ({ data, view }: TProps) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectUserComments);
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { category } = useParams();

  const { id, title, authors, rating, issueYear, booking, delivery, image } = data;
  const imgSrc = `${image?.url}`;
  const bookCommentIds = comments?.map(({ bookId }) => bookId);
  const isCommentedBook = bookCommentIds?.includes(id);
  const filtredCommentedBookData = comments?.find((comment) => comment.bookId === id);

  const onBookClick = () => navigate(`/books/${category}/${id}`);

  const onBtnCommentClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(bookActions.getBook(id));
    dispatch(modalActions.open({ type: MODAL_TYPES.RATE_BOOK, modalInfo: { id } }));
  };

  const onBtnRatingClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(bookActions.getBook(id));
    dispatch(
      modalActions.open({
        type: MODAL_TYPES.RATE_BOOK,
        modalInfo: {
          view: 'editCommentModal',
          ...filtredCommentedBookData,
        },
      })
    );
  };

  return (
    <BookItemStyled onClick={onBookClick} data-test-id={dataTestId.CARD}>
      <ImgWrapper>
        {imgSrc ? (
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
            {authors?.map((author) => author)}, {issueYear}
          </Author>
        </NameBox>
        <Active>
          <RatingList rating={rating} />
          {view !== 'history' ? (
            <ButtonToBook book={data} booking={booking} delivery={delivery} />
          ) : isCommentedBook ? (
            <Button
              className='editCommentButton'
              onClick={onBtnRatingClick}
              variant={BUTTON_VARIANTS.SMALL}
              dataTestId={dataTestId.BUTTON_REVIW_HISTORY}
            >
              Изменить оценку
            </Button>
          ) : (
            <Button
              onClick={onBtnCommentClick}
              variant={BUTTON_VARIANTS.SMALL}
              dataTestId={dataTestId.BUTTON_REVIW_HISTORY}
            >
              Оставить отзыв
            </Button>
          )}
        </Active>
      </Info>
    </BookItemStyled>
  );
};

export default BookLong;
