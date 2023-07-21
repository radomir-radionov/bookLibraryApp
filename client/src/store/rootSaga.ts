import auth from 'redux/auth/saga';
import book from 'redux/book/saga';
import booking from 'redux/booking/saga';
import books from 'redux/books/saga';
import categories from 'redux/categories/saga';
import forgotPwd from 'redux/forgotPwd/saga';
import registration from 'redux/registration/saga';
import user from 'redux/user/saga';
import { all, fork } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([
    fork(user),
    fork(books),
    fork(book),
    fork(categories),
    fork(auth),
    fork(booking),
    fork(registration),
    fork(forgotPwd),
  ]);
}
