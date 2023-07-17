import { TUserData } from 'types/user';

const createBookingPayload = (selectedDate: Date | undefined, user: TUserData | null, bookingId?: number) => {
  if (selectedDate === undefined) {
    return;
  }

  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth() + 1 < 10 ? `0${selectedDate.getMonth() + 1}` : selectedDate.getMonth() + 1;
  const date = selectedDate.getDate() < 10 ? `0${selectedDate.getDate()}` : selectedDate.getDate();

  const payload = {
    order: true,
    dateOrder: `${year}-${month}-${date}T00:00:00.000Z`,
    customer: user?.id,
  };

  if (bookingId) {
    return { bookingId, payload };
  }

  return payload;
};

export default createBookingPayload;
