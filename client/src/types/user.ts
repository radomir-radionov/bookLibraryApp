export type TFileUploadResponse = {
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

export type TUser = {
  id: number;
  username: string;
  email: string;
  password?: string;
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
  history: TUserHistory;
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

export type ShortBookDataProps = {
  id: number;
  title: string;
  issueYear: string;
  authors: string[];
  image: null;
};

export type TUserBooking = {
  id: number | null;
  order: string | null;
  dateOrder: string | Date | null;
  book: ShortBookDataProps | null;
};

export type TUserDelivery = {
  id: number;
  handed: string;
  dateHandedFrom: string | Date;
  dateHandedTo: string | Date;
  book: ShortBookDataProps;
};

export type TUserHistory = {
  id: number;
  books: ShortBookDataProps[];
};
