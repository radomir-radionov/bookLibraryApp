import { BookProps } from 'types/book';

export type BooksStateType = {
  books: BookProps[];
  isSortBooksByRating: boolean;
  isBooksLoading: boolean;
  booksError: { isError: boolean; message: string };
};
