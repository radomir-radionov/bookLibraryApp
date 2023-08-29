import dataTestId from 'constants/dataTestId';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { bookActions } from 'redux/book';
import { modalActions } from 'redux/modal';
import { enteredBookName, selectUserComments } from 'redux/user/selectors';
import { Button, ButtonBooking, HighLight, RatingList } from 'components';
import { TBook } from 'types/book';
import { BUTTON_VARIANTS } from 'types/button';
import { MODAL_TYPES } from 'types/modal';

import { Author, BookItemStyled, CatIcon, Img, ImgBox, Info, NameBox, SubTitleWrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

type BookShortProps = {
  data: TBook;
  view?: 'history';
};

const BookShort = ({ data, view }: BookShortProps) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectUserComments);
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { category } = useParams();

  const { id, title, authors, rating, issueYear, booking, delivery, image } = data;

  const bookCommentIds = comments?.map(({ bookId }) => bookId);
  const isCommentedBook = bookCommentIds?.includes(id);
  const filtredCommentedBookData = comments?.find((comment) => comment.bookId === id);

  const onNavigateClick = () => navigate(`/books/${category}/${id}`);

  const onSetCommentClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(bookActions.getBook(id));
    dispatch(modalActions.open({ type: MODAL_TYPES.RATE_BOOK, modalInfo: { id } }));
  };

  const handleChangeCommentClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation();
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
    <BookItemStyled onClick={onNavigateClick} data-test-id={dataTestId.CARD}>
      {image ? (
        <Img src={`http://localhost:5000/${image}`} alt='Book cover' />
      ) : (
        <ImgBox>
          <CatIcon />
        </ImgBox>
      )}
      <Info>
        <RatingList rating={rating} />
        <NameBox>
          <SubTitleWrapper>
            <HighLight text={title} searcheText={enteredText} />
          </SubTitleWrapper>
          <Author>
            {authors?.map((author) => author)}, {issueYear}
          </Author>
        </NameBox>
        {view !== 'history' ? (
          <ButtonBooking book={data} booking={booking} delivery={delivery} />
        ) : isCommentedBook ? (
          <Button
            className='editCommentButton'
            onClick={handleChangeCommentClick}
            variant={BUTTON_VARIANTS.SMALL}
            dataTestId={dataTestId.BUTTON_REVIW_HISTORY}
          >
            Изменить оценку
          </Button>
        ) : (
          <Button
            onClick={onSetCommentClick}
            variant={BUTTON_VARIANTS.SMALL}
            dataTestId={dataTestId.BUTTON_REVIW_HISTORY}
          >
            Оставить отзыв
          </Button>
        )}
      </Info>
    </BookItemStyled>
  );
};

export default BookShort;
