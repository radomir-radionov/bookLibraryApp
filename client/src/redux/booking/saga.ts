import responseText from 'constants/responseText';

import { modalActions } from 'redux/modal';
import { toastActions } from 'redux/toast';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { bookingReqService, booksService } from 'services';
import { ToastTypes } from 'types/toast';

import { booksActions } from '../books/slice';

import { bookingActions } from './slice';
import prepareToastData from 'helpers/toast/createToast.js';
import { TBookDetailed } from 'types/book.js';
import { bookActions } from 'redux/book/slice.js';

export function* postBooking({ payload }: ReturnType<typeof bookingActions.createBookingReq>) {
  try {
    const { onlyBookData, preparedBookingData } = payload;

    yield call(() => bookingReqService.postBooking(preparedBookingData));

    if (onlyBookData) {
      const book: TBookDetailed = yield call(() => booksService.getBookById(preparedBookingData.bookId));
      yield put(bookActions.setBook(book));
    } else {
      yield put(booksActions.getBooks());
    }

    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.BOOKING_SUCCESS)));
  } catch (e) {
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.BOOKING_ERROR)));
  }
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

    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.UPDATE_BOOKING_SUCCESS)));
  } catch (e) {
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.UPDATE_BOOKING_ERROR)));
  }
}

export function* deleteBooking({ payload }: ReturnType<typeof bookingActions.deleteBookingReq>) {
  try {
    const { id, onlyBookData, bookingId } = payload;

    yield call(() => bookingReqService.deleteBooking(bookingId));

    if (onlyBookData) {
      const book: TBookDetailed = yield call(() => booksService.getBookById(id));
      yield put(bookActions.setBook(book));
    } else {
      yield put(booksActions.getBooks());
    }

    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.CANCEL_BOOKING_SUCCESS)));
  } catch (e) {
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.CANCEL_BOOKING_ERROR)));
  }
}

function* bookingSaga() {
  yield all([
    takeLatest(bookingActions.createBookingReq, postBooking),
    takeLatest(bookingActions.updateBookingReq, putBooking),
    takeLatest(bookingActions.deleteBookingReq, deleteBooking),
  ]);
}

export default bookingSaga;
