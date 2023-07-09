import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { bookActions } from 'redux/book';
import { bookDataState } from 'redux/book/selectors';
import { RatingList, SubTitle } from 'components';
import { AboutBook, CommentsList, Detailed } from 'modules';

import { Additional, BookStyled, Content, Text, RateBox, RateQty, Rating } from './styles';

const BookInfo = () => {
  const dispatch = useDispatch();
  const bookData = useSelector(bookDataState);
  const location = useLocation();
  const [ignore, setIgnore] = useState(false);

  const { book } = bookData;
  const { rating, description } = book;
  const isBookDataEmpty = Object.keys(book).length !== 0;

  const pathData = location.pathname.split('/');
  const bookId = pathData[3];

  useEffect(() => {
    if (ignore) {
      dispatch(bookActions.getBook(Number(bookId)));
    }

    return () => setIgnore(true);
  }, [bookId, ignore, dispatch]);

  return (
    <BookStyled>
      {isBookDataEmpty && (
        <>
          <AboutBook data={book} />
          <Additional>
            <Content>
              <SubTitle>О книге</SubTitle>
              <Text>{description}</Text>
            </Content>
            <Rating>
              <SubTitle>Рейтинг</SubTitle>
              <RateBox>
                <RatingList rating={rating} />
                <RateQty>{rating}</RateQty>
              </RateBox>
            </Rating>
            <Detailed data={book} />
            <CommentsList data={book} />
          </Additional>
        </>
      )}
    </BookStyled>
  );
};

export default BookInfo;
