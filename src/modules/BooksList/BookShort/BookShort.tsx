import serverEndpoints from 'constants/apiEndpoints';
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

import { Author, BookItemStyled, CatIcon, Img, ImgBox, ImgWrapper, Info, NameBox, SubTitleWrapper } from './styles';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

type BookShortProps = {
  data: BookProps;
  view?: 'history';
};

const BookShort = ({ data, view }: BookShortProps) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectUserComments);
  const enteredText = useSelector(enteredBookName);
  const navigate = useNavigate();
  const { category } = useParams();

  const { id, title, authors, rating, issueYear, booking, delivery, image } = data;
  const imgSrc = serverEndpoints.HOST + image?.url;

  const bookCommentIds = comments?.map(({ bookId }) => bookId);
  const isCommentedBook = bookCommentIds?.includes(id);
  const filtredCommentedBookData = comments?.find((comment) => comment.bookId === id);

  const handleNavigateClick = () => navigate(`/books/${category}/${id}`);

  const handleSetCommentClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    dispatch(bookActions.getBook(id));
    dispatch(modalActions.open({ type: MODAL_TYPES.RATE_BOOK, modalInfo: { id } }));
  };

  const handleChangeCommentClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
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
    <BookItemStyled onClick={handleNavigateClick} data-test-id={dataTestId.CARD}>
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
        <RatingList rating={rating} />
        <NameBox>
          <SubTitleWrapper>
            <HighLight text={title} searcheText={enteredText} />
          </SubTitleWrapper>
          <Author>
            {authors?.map((author) => {
              return author;
            })}
            , {issueYear}
          </Author>
        </NameBox>
        {view !== 'history' ? (
          <ButtonToBook book={data} booking={booking} delivery={delivery} />
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
            onClick={handleSetCommentClick}
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
