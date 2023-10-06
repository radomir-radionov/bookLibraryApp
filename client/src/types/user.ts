import { THistoryBook } from './book.js';

export type TUser = {
  id: number;
  username: string;
  email: string;
  passwordHash?: string;
  confirmed: boolean;
  provider: string;
  blocked: boolean;
  firstName: string;
  lastName: string;
  phone: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
};

export type TExtendedUserInfo = TUser & {
  role: RoleProps;
  comments: TComment[];
  booking: TUserBooking;
  delivery: TUserDelivery;
  histories: THistoryBook[];
};

export type RoleProps = {
  id: number;
  name: string;
  description: string;
  type: string;
};

export type TComment = {
  id: number;
  rating: number;
  text: string;
  bookId: number;
};

export type TShortBook = {
  id: number;
  title: string;
  issueYear: string;
  authors: string[];
  image: null;
};

export type TUserBooking = {
  id: number | null;
  bookId: number;
  order: string | null;
  createdAt: string | Date | null;
  book: TShortBook | null;
};

export type TUserDelivery = {
  id: number;
  handed: string;
  dateHandedFrom: string | Date;
  dateHandedTo: string | Date;
  book: TShortBook;
};
