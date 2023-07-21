export type PostBookingProps = {
  data: { book: number; customer: number; dateOrder: string; order: boolean };
};

export type PutRebookingProps = {
  bookingId: number;
  reqBody: {
    data: {
      book: number;
      customer: number;
      dateOrder: string;
      order: boolean;
    };
  };
};
