import dataTestId from 'constants/dataTestId';

import { useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectIsBooksLoading, selectIsSortByRating } from 'redux/books/selectors';
import { displayingBooks } from 'redux/displayingContent/selectors';
import { selectToastData } from 'redux/toast/selectors';
import { enteredBookName } from 'redux/user/selectors';
import { BookLong, BookShort } from 'modules';
import { BookProps } from 'types/book';
import { CategoryProps } from 'types/categories';
import { getСurrentCategory } from 'utils/categories';
import getFilteredBooks from 'utils/getFiltredBooks';

import { BooksListStyled, EmptyData, Message } from './styles';

type BooksListProps = {
  books: BookProps[];
  categories: CategoryProps[];
};

const BooksList = ({ books, categories }: BooksListProps) => {
  const displayingData = useSelector(displayingBooks);
  const enteredText = useSelector(enteredBookName);
  const isSortByRating = useSelector(selectIsSortByRating);
  const isBooksLoading = useSelector(selectIsBooksLoading);
  const toastData = useSelector(selectToastData);
  const [filtredBooks, setFiltredBooks] = useState(books);
  const { category = 'all' } = useParams();

  const isToastData = Object.keys(toastData).length === 0;

  const categoryTranslate = useMemo(
    () => getСurrentCategory(category, categories, books),
    [category, categories, books]
  );

  useEffect(() => {
    setFiltredBooks(getFilteredBooks(books, enteredText, isSortByRating, categoryTranslate));
  }, [books, enteredText, isSortByRating, categoryTranslate]);

  if (isBooksLoading && !isToastData) {
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
      {filtredBooks.map((book) => {
        return displayingData === 'tiles' ? (
          <BookShort key={book.id} data={book} />
        ) : (
          <BookLong key={book.id} data={book} />
        );
      })}
    </BooksListStyled>
  );
};

export default BooksList;
