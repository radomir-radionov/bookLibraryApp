import { TBookDetailed } from 'types/book';

export type TBookState = {
  book: TBookDetailed;
  isBookLoading: boolean;
  bookError: { isError: boolean; message: string };
};
