import responseText from 'constants/responseText';

import { modalActions } from 'redux/modal';
import { toastActions } from 'redux/toast';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { bookingReqService, booksService } from 'services';
import { ToastTypes } from 'types/toast';

import { booksActions } from '../books/slice';

import { bookingActions } from './slice';
import prepareToastData from 'helpers/toast/createToast.js';
import { TBookDetailed } from 'types/book.js';
import { bookActions } from 'redux/book/slice.js';
import { userActions } from 'redux/user/slice.js';
import { selectUserDataId } from 'redux/user/selectors.js';

export function* postBooking({ payload }: ReturnType<typeof bookingActions.createBookingReq>) {
  try {
    const { onlyBookData, preparedBookingData } = payload;
    const userId: number = yield select(selectUserDataId);

    yield call(() => bookingReqService.postBooking(preparedBookingData));
    yield put(userActions.getExtendeUserInfo(userId));

    if (onlyBookData) {
      const book: TBookDetailed = yield call(() => booksService.getBookById(preparedBookingData.bookId));
      yield put(bookActions.setBook(book));
    } else {
      yield put(booksActions.getBooks());
    }

    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.BOOKING_SUCCESS)));
  } catch (e) {
    const { response } = e as any;
    console.log(e);
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(modalActions.close());
  yield put(bookingActions.cancelLoading());
}

export function* putBooking({
  payload: { onlyBookData, preparedBookingData },
}: ReturnType<typeof bookingActions.updateBookingReq>) {
  try {
    yield call(() => bookingReqService.putBooking(preparedBookingData));

    if (onlyBookData) {
      const book: TBookDetailed = yield call(() => booksService.getBookById(preparedBookingData.payload.bookId));
      yield put(bookActions.setBook(book));
    } else {
      yield put(booksActions.getBooks());
    }

    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.UPDATE_BOOKING_SUCCESS)));
  } catch (e) {
    const { response } = e as any;

    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(modalActions.close());
  yield put(bookingActions.cancelLoading());
}

export function* deleteBooking({ payload }: ReturnType<typeof bookingActions.deleteBookingReq>) {
  try {
    const { id, dataType } = payload;
    const userId: number = yield select(selectUserDataId);

    yield call(() => bookingReqService.deleteBooking(id));
    yield put(booksActions.getBooks());

    if (dataType === 'book') {
      yield put(bookActions.getBook(id));
    } else {
      yield put(userActions.getExtendeUserInfo(userId));
    }

    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.CANCEL_BOOKING_SUCCESS)));
  } catch (e) {
    const { response } = e as any;

    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(modalActions.close());
  yield put(bookingActions.cancelLoading());
}

export function* deleteExpiredBooking({ payload }: ReturnType<typeof bookingActions.deleteExpiredBookingReq>) {
  try {
    const { id } = payload;
    const userId: number = yield select(selectUserDataId);

    yield call(() => bookingReqService.deleteExpiredBooking(id));
    yield put(userActions.getExtendeUserInfo(userId));

    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.CANCEL_EXPIRED_BOOKING_SUCCESS)));
  } catch (e) {
    const { response } = e as any;

    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(bookingActions.cancelLoading());
}

function* bookingSaga() {
  yield all([
    takeLatest(bookingActions.createBookingReq, postBooking),
    takeLatest(bookingActions.updateBookingReq, putBooking),
    takeLatest(bookingActions.deleteBookingReq, deleteBooking),
    takeLatest(bookingActions.deleteExpiredBookingReq, deleteExpiredBooking),

    ,
  ]);
}

export default bookingSaga;
