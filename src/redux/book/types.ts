import { TBookDetailed } from 'types/book';

export type BookStateProps = {
  book: TBookDetailed;
  isBookLoading: boolean;
  bookError: { isError: boolean; message: string };
};
