import { TBook } from 'types/book';

export const sortBooksByRatingNormalizer = (data: TBook[]) => {
  data = data.sort((a, b) => {
    if (a.rating === null && b.rating === null) {
      return 0;
    } else if (a.rating === null) {
      return -1;
    } else if (b.rating === null) {
      return 1;
    } else if (a.rating === 0) {
      return -1;
    } else if (b.rating === 0) {
      return 1;
    } else {
      const aRating = a.rating as number;
      const bRating = b.rating as number;

      return aRating - bRating;
    }
  });

  return data;
};
