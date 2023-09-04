import moment from 'moment';
import { TComment } from 'types/book.js';

const getCommentInfo = (comments: TComment[] | [], id: number) => {
  const bookCommentIds = comments.map(({ bookId }) => bookId);
  const isCommentedBook = bookCommentIds.includes(id);
  const filtredCommentedBookData = comments.find(({ bookId }) => bookId === id);

  const sortedCommentsByCreatedAt = comments.slice().sort((a, b) => {
    const dateA = moment(a.createdAt);
    const dateB = moment(b.createdAt);

    return dateB.diff(dateA);
  });

  return { filtredCommentedBookData, sortedCommentsByCreatedAt, isCommentedBook };
};

export default getCommentInfo;
