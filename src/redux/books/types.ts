import { TBook } from 'types/book';

export type TBooksState = {
  books: TBook[];
  isSortBooksByRating: boolean;
  isBooksLoading: boolean;
  booksError: { isError: boolean; message: string };
};
