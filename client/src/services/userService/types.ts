export type PostCommentProps = { bookId: number; userId: number; rating: number; text: string };

export type TPutUserReq = {
  userId: number;
  payload: { username: string; password: string; firstName: string; lastName: string; phone: string; email: string };
};

export type PutCommentProps = {
  commentId: number;
  data: { bookId: number; userId: number; rating: number; text: string };
};

export type pPutRebookingProps = {
  data: { book: number; customer: number; dateOrder: string; order: boolean };
};
