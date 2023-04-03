import responseText from 'constants/responseText';

import { bookActions } from 'redux/book';
import { modalActions } from 'redux/modal';
import { toastActions } from 'redux/toast';
import { userActions } from 'redux/user';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { nanoid } from '@reduxjs/toolkit';
import { booksService, userService } from 'services';
import { PostCommentsProps } from 'services/userService/types';
import { BookDetailedProps } from 'types/book';
import { ToastTypes } from 'types/toast';
import { UserDataProps } from 'types/user';

import { selectUserDataId } from './selectors';

export function* clearUserData() {
  yield localStorage.removeItem('jwt');
  yield localStorage.removeItem('userData');
}

export function* getUser() {
  try {
    const data: UserDataProps = yield call(() => userService.getUser());

    yield put(userActions.setUserData(data));
  } catch (e) {
    console.log(e);
  }
}

export function* putComment({ payload }: ReturnType<typeof userActions.putComment>) {
  try {
    yield call(() => userService.putComment(payload));

    yield put(userActions.getUser());
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

export function* postComments({ payload }: ReturnType<typeof userActions.postComments>) {
  const reqBody: PostCommentsProps = { data: { ...payload } };
  const { book } = payload;

  try {
    yield call(() => userService.postComments(reqBody));
    const bookData: BookDetailedProps = yield call(() => booksService.getBook(book));

    yield put(bookActions.setBook(bookData));
    yield put(userActions.getUser());
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

export function* putUploadAvatar({ payload }: ReturnType<typeof userActions.putUploadAvatar>): any {
  const { id, formData } = payload;

  try {
    const newAvatar = yield call(() => userService.putUploadAvatar(formData));
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

export function* putEditUserData({ payload }: ReturnType<typeof userActions.putEditUserData>) {
  const userId: number = yield select(selectUserDataId);

  try {
    const requestData = {
      userId,
      reqBody: payload,
    };
    const updatedUser: UserDataProps = yield call(() => userService.putEditUserData(requestData));

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
    yield put(userActions.getUser());
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
    takeLatest(userActions.putEditUserData, putEditUserData),
    takeLatest(userActions.putUploadAvatar, putUploadAvatar),
    takeLatest(userActions.deletelBooking, deletelBooking),
    takeLatest(userActions.putComment, putComment),
    takeLatest(userActions.postComments, postComments),
    takeLatest(userActions.clearUser, clearUserData),
  ]);
}

export default userSaga;
