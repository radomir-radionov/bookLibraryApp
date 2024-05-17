import { TUser } from 'types/user';

const prepareBookingData = (selectedDate: Date | undefined, user: TUser | null, id: number, bookingId?: number) => {
  if (selectedDate === undefined) {
    return;
  }

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : selectedDate.getMonth() + 1;
  const date = selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate();

  const payload = {
    userId: user?.id,
    bookId: id,
    order: true,
    createdAt: `${year}-${month}-${date}T00:00:00.000Z`,
  };

  if (bookingId) {
    return { bookingId, payload };
  }

  return payload;
};

export default prepareBookingData;
