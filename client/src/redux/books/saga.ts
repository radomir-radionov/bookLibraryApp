import responseText from 'constants/responseText';

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { booksService } from 'services';
import { TBook } from 'types/book';
import { ToastTypes } from 'types/toast';

import { toastActions } from '../toast/slice';

import { booksActions } from './slice';
import prepareToastData from 'helpers/toast/createToast.js';

export function* getBooks() {
  try {
    const books: TBook[] = yield call(() => booksService.getBooks());

    yield put(booksActions.setBooks(books));
  } catch (e) {
    yield put(booksActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.BOOKS_ERROR)));
  }
}

function* booksSaga() {
  yield all([takeLatest(booksActions.getBooks, getBooks)]);
}

export default booksSaga;
