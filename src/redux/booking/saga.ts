import responseText from 'constants/responseText';

import { modalActions } from 'redux/modal';
import { toastActions } from 'redux/toast';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { booksService } from 'services';
import { ToastTypes } from 'types/toast';

import { booksActions } from '../books/slice';
import { categoriesActions } from '../categories/slice';

import { selectBookId } from './selectors';
import { bookingActions } from './slice';

export function* postBooking({ payload }: ReturnType<typeof bookingActions.postBooking>) {
  const bookId: number = yield select(selectBookId);
  const reqBody = {
    data: {
      book: bookId,
      ...payload,
    },
  };

  try {
    yield call(() => booksService.postBooking(reqBody));

    yield put(booksActions.getBooks());
    yield put(categoriesActions.getCategories());
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.SUCCESS,
        text: responseText.BOOKING_SUCCESS,
      })
    );
  } catch (e) {
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.ERROR,
        text: responseText.BOOKING_ERROR,
      })
    );
  }
}

export function* putRebooking({ payload }: ReturnType<typeof bookingActions.putRebooking>) {
  const bookId: number = yield select(selectBookId);
  const { bookingId } = payload;

  const reqBody = {
    data: {
      book: bookId,
      ...payload.payload,
    },
  };

  try {
    yield call(() => booksService.putRebooking({ bookingId, reqBody }));

    yield put(booksActions.getBooks());
    yield put(categoriesActions.getCategories());
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.SUCCESS,
        text: responseText.REBOOKING_SUCCESS,
      })
    );
  } catch (e) {
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.ERROR,
        text: responseText.REBOOKING_ERROR,
      })
    );
  }
}

export function* deleteBooking({ payload }: ReturnType<typeof bookingActions.deleteBooking>) {
  try {
    yield call(() => booksService.deleteBooking(payload));

    yield put(booksActions.getBooks());
    yield put(categoriesActions.getCategories());
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.SUCCESS,
        text: responseText.CANCEL_BOOKING_SUCCESS,
      })
    );
  } catch (e) {
    yield put(modalActions.close());
    yield put(bookingActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.ERROR,
        text: responseText.CANCEL_BOOKING_ERROR,
      })
    );
  }
}

function* bookingSaga() {
  yield all([
    takeLatest(bookingActions.postBooking, postBooking),
    takeLatest(bookingActions.putRebooking, putRebooking),
    takeLatest(bookingActions.deleteBooking, deleteBooking),
  ]);
}

export default bookingSaga;
