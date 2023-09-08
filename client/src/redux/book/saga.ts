import responseText from 'constants/responseText';

import { toastActions } from 'redux/toast';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { booksService } from 'services';
import { TBookDetailed } from 'types/book';
import { ToastTypes } from 'types/toast';

import { bookActions } from './slice';
import prepareToastData from 'helpers/toast/createToast.js';

export function* getBook(action: PayloadAction<number>) {
  const id = action.payload;

  try {
    yield put(bookActions.clearBookData());

    const book: TBookDetailed = yield call(() => booksService.getBookById(id));

    yield put(bookActions.setBook(book));
  } catch (e) {
    yield put(bookActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.BOOK_ERROR)));
  }
}

function* bookSaga() {
  yield all([takeLatest(bookActions.getBook, getBook)]);
}

export default bookSaga;
