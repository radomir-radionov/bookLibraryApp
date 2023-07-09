import { TBook } from 'types/book';

export type BooksStateType = {
  books: TBook[];
  isSortBooksByRating: boolean;
  isBooksLoading: boolean;
  booksError: { isError: boolean; message: string };
};
