import responseText from 'constants/responseText';

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { booksService } from 'services';
import { BookProps } from 'types/book';
import { ToastTypes } from 'types/toast';

import { toastActions } from '../toast/slice';

import { booksActions } from './slice';

export function* getBooks() {
  try {
    const books: BookProps[] = yield call(() => booksService.getBooks());

    yield put(booksActions.setBooks(books));
  } catch (e) {
    yield put(booksActions.cancelLoading());
    yield put(
      toastActions.addToast({
        type: ToastTypes.ERROR,
        text: responseText.BOOKS_ERROR,
      })
    );
  }
}

function* booksSaga() {
  yield all([takeLatest(booksActions.getBooks, getBooks)]);
}

export default booksSaga;
