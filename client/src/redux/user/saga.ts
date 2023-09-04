import responseText from 'constants/responseText';

import { bookActions } from 'redux/book';
import { modalActions } from 'redux/modal';
import { toastActions } from 'redux/toast';
import { userActions } from 'redux/user';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { nanoid } from '@reduxjs/toolkit';
import { booksService, userService } from 'services';
import { PostCommentProps } from 'services/userService/types';
import { TBookDetailed } from 'types/book';
import { ToastTypes } from 'types/toast';

import { selectUserDataId } from './selectors';
import { TExtendedUserInfo } from 'types/user';
import { TPutCommentRes } from './types.js';

export function* clearUserData() {
  yield localStorage.removeItem('jwt');
  yield localStorage.removeItem('userData');
}

export function* getUser({ payload }: ReturnType<typeof userActions.getUser>) {
  try {
    const data: TExtendedUserInfo = yield call(() => userService.getUser(payload));

    yield put(userActions.setAdditionalInfo(data));
    yield put(userActions.cancelLoading());
  } catch (e) {
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.ERROR,
        text: responseText.COMMON_ERROR,
      })
    );
  }
}

export function* postComment({ payload }: ReturnType<typeof userActions.postComment>) {
  const reqBody: PostCommentProps = { ...payload };
  try {
    yield call(() => userService.postComment(reqBody));

    const bookData: TBookDetailed = yield call(() => booksService.getBookById(payload.bookId));

    yield put(bookActions.setBook(bookData));
    yield put(modalActions.close());
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.SUCCESS,
        text: responseText.COMMENTS_SUCCESS,
      })
    );
  } catch (e) {
    yield put(modalActions.close());
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.ERROR,
        text: responseText.COMMENTS_ERROR,
      })
    );
  }
}

export function* putComment({ payload }: ReturnType<typeof userActions.putComment>) {
  try {
    const {
      data: { bookId },
    }: TPutCommentRes = yield call(() => userService.putComment(payload));
    const bookData: TBookDetailed = yield call(() => booksService.getBookById(bookId));

    yield put(bookActions.setBook(bookData));
    yield put(modalActions.close());
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.SUCCESS,
        text: responseText.EDIT_COMMENTS_SUCCESS,
      })
    );
  } catch (e) {
    yield put(modalActions.close());
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.ERROR,
        text: responseText.EDIT_COMMENTS_ERROR,
      })
    );
  }
}

export function* putAvatar({ payload }: ReturnType<typeof userActions.putAvatar>): any {
  const { id, formData } = payload;

  try {
    const newAvatar = yield call(() => userService.putAvatar(formData));
    const reqAvatarToServerBody = {
      avatar: newAvatar[0].id,
    };
    const payloadAvatarToServer = {
      userId: id,
      reqBody: reqAvatarToServerBody,
    };

    if (newAvatar) {
      const updatedUser = yield call(() => userService.putAvatarToServer(payloadAvatarToServer));

      yield put(userActions.setUserData(updatedUser));
    }

    yield put(userActions.setAvatar(newAvatar[0].url));
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.SUCCESS,
        text: responseText.UPLOAD_AVATAR_SUCCESS,
      })
    );
  } catch (e) {
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.ERROR,
        text: responseText.UPLOAD_AVATAR_ERROR,
      })
    );
  }
}

export function* putUser({ payload }: ReturnType<typeof userActions.putUser>) {
  try {
    const userId: number = yield select(selectUserDataId);
    const updatedUser: TExtendedUserInfo = yield call(() => userService.putUser({ userId, payload }));

    if (updatedUser) {
      yield put(userActions.setUserData(updatedUser));
    }

    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.SUCCESS,
        text: responseText.EDIT_USER_DATA_SUCCESS,
      })
    );
  } catch (e) {
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.ERROR,
        text: responseText.EDIT_USER_DATA_ERROR,
      })
    );
  }
}

export function* deletelBooking({ payload }: ReturnType<typeof userActions.deletelBooking>) {
  try {
    yield call(() => userService.deleteBooking(payload));
    // yield put(userActions.getUser());
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.SUCCESS,
        text: responseText.CANCEL_BOOKING_SUCCESS,
      })
    );
  } catch (e) {
    yield put(userActions.cancelLoading());
    yield put(
      toastActions.addToast({
        id: nanoid(),
        type: ToastTypes.ERROR,
        text: responseText.CANCEL_BOOKING_ERROR,
      })
    );
  }
}

function* userSaga() {
  yield all([
    takeLatest(userActions.getUser, getUser),
    takeLatest(userActions.putUser, putUser),
    takeLatest(userActions.putAvatar, putAvatar),
    takeLatest(userActions.deletelBooking, deletelBooking),
    takeLatest(userActions.putComment, putComment),
    takeLatest(userActions.postComment, postComment),
    takeLatest(userActions.clearUser, clearUserData),
  ]);
}

export default userSaga;
