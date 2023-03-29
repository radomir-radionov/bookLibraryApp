export type FileUploadResponseProps = {
  id: number;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: any;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: string | null;
  createdAt: string;
  updatedAt: string;
};

export type UserDataProps = {
  id: number;
  username: string;
  email: string;
  confirmed: boolean;
  blocked: boolean;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  phone: string;
  comments: CommentProps[];
  role: RoleProps;
  avatar: string;
  booking: UserBookingProps;
  delivery: UserDeliveryProps;
  history: UserHistoryProps;
};

export type CommentProps = {
  id: number;
  rating: number;
  text: string;
  bookId: number;
};

export type RoleProps = {
  id: number;
  name: string;
  description: string;
  type: string;
};

export type ShortBookDataProps = {
  id: number;
  title: string;
  issueYear: string;
  authors: string[];
  image: null;
};

export type UserBookingProps = {
  id: number | null;
  order: string | null;
  dateOrder: string | Date | null;
  book: ShortBookDataProps | null;
};

export type UserDeliveryProps = {
  id: number;
  handed: string;
  dateHandedFrom: string | Date;
  dateHandedTo: string | Date;
  book: ShortBookDataProps;
};

export type UserHistoryProps = {
  id: number;
  books: ShortBookDataProps[];
};
