import { BookDetailedProps } from 'types/book';

export type BookStateProps = {
  book: BookDetailedProps;
  isBookLoading: boolean;
  bookError: { isError: boolean; message: string };
};
