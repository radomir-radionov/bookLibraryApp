export type TPostBookingReq = { bookId: number; userId: number; dateOrder: string; order: boolean };

export type TPutBookingReq = {
  bookingId: number;
  payload: {
    bookId: number;
    userId: number;
    dateOrder: string;
    order: boolean;
  };
};
