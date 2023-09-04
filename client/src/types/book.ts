export type TBook = {
  issueYear: string | null;
  rating: number | null;
  title: string;
  authors: string[] | null;
  image: string | null;
  categories: string[] | null;
  id: number;
  comments: TComment[] | [];
  booking: {
    id: number;
    order: boolean;
    dateOrder: string | null;
    customerId: number | null;
    customerFirstName: string | null;
    customerLastName: string | null;
  } | null;
  delivery: {
    id: number;
    handed: boolean;
    dateHandedFrom: string | null;
    dateHandedTo: string | null;
    recipientId: number | null;
    recipientFirstName: string | null;
    recipientLastName: string | null;
  } | null;
  histories:
    | [
        {
          id: number | null;
          userId: number | null;
        }
      ]
    | null;
};

export type TBookDetailed = TBook & {
  description: string;
  publish: string;
  pages: string;
  cover: string;
  weight: string;
  format: string;
  ISBN: string;
  producer: string;
};

export type TComment = {
  id: number;
  bookId: number;
  text: string;
  rating: number;
  user: {
    commentUserId: number;
    firstName: string;
    lastName: string;
    avatarUrl: string;
  };
  createdAt: string;
};
