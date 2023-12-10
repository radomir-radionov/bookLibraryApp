import moment from 'moment';
import { TComment } from 'types/book.js';

const getCommentInfo = (comments: TComment[] | [], id: number, userId: number) => {
  const usersIds = comments.map(({ user }) => user.id);
  const isCommentedBook = usersIds.includes(userId);
  const foundUserComment = comments.find(({ user }) => user.id === userId);

  const sortedCommentsByCreatedAt = comments.slice().sort((a, b) => {
    const dateA = moment(a.createdAt);
    const dateB = moment(b.createdAt);

    return dateB.diff(dateA);
  });

  return { foundUserComment, sortedCommentsByCreatedAt, isCommentedBook };
};

export default getCommentInfo;
