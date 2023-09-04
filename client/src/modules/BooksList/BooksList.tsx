import dataTestId from 'constants/dataTestId';

import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectIsBooksLoading, selectIsSortByRating } from 'redux/books/selectors';
import { displayingBooks } from 'redux/displayingContent/selectors';
import { selectToasts } from 'redux/toast/selectors';
import { enteredBookName } from 'redux/user/selectors';
import { BookLong, BookShort } from 'modules';
import { TBook } from 'types/book';
import { TCategory } from 'types/categories';
import { getСurrentCategory } from 'utils/categories';
import getFilteredBooks from 'utils/getFiltredBooks';

import { BooksListStyled, EmptyData, Message } from './styles';
import { booksActions } from 'redux/books/slice.js';

type BooksListProps = {
  books: TBook[];
  categories: TCategory[];
};

const BooksList = ({ books, categories }: BooksListProps) => {
  const dispatch = useDispatch();
  const displayingData = useSelector(displayingBooks);
  const enteredText = useSelector(enteredBookName);
  const isSortByRating = useSelector(selectIsSortByRating);
  const isBooksLoading = useSelector(selectIsBooksLoading);
  const toasts = useSelector(selectToasts);
  const { category = 'all' } = useParams();
  const [filtredBooks, setFiltredBooks] = useState(books);

  const categoryTranslate = useMemo(
    () => getСurrentCategory(category, categories, books),
    [category, categories, books]
  );

  useEffect(() => {
    dispatch(booksActions.getBooks());
  }, []);

  useEffect(() => {
    setFiltredBooks(getFilteredBooks(books, enteredText, isSortByRating, categoryTranslate));
  }, [books, enteredText, isSortByRating, categoryTranslate]);

  if (isBooksLoading && !toasts.length) {
    return <EmptyData />;
  }

  if (!isBooksLoading && !filtredBooks.length) {
    return (
      <EmptyData>
        {enteredText.length ? (
          <Message data-test-id={dataTestId.SEARCH_RESULT_NOT_FOUND}>По запросу ничего не найдено</Message>
        ) : (
          <Message data-test-id={dataTestId.EMPTY_CATEGORY}>В этой категории книг ещё нет</Message>
        )}
      </EmptyData>
    );
  }

  return (
    <BooksListStyled $displaying={displayingData} data-test-id={dataTestId.CONTENT}>
      {filtredBooks.map((book) =>
        displayingData === 'tiles' ? <BookShort key={book.id} data={book} /> : <BookLong key={book.id} data={book} />
      )}
    </BooksListStyled>
  );
};

export default BooksList;
