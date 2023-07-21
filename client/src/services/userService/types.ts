export type PostCommentsProps = {
  data: { rating: number; text: string; book: string; user: string };
};

export type PutEditUserDataProps = {
  userId: number;
  reqBody: { username: string; password: string; firstName: string; lastName: string; phone: string; email: string };
};

export type PutCommentProps = {
  commentId?: string;
  data: { username: string; password: string; firstName: string; lastName: string; phone: string; email: string };
};

export type pPutRebookingProps = {
  data: { book: number; customer: number; dateOrder: string; order: boolean };
};
