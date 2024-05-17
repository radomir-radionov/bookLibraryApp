import responseText from 'constants/responseText';

import { bookActions } from 'redux/book';
import { modalActions } from 'redux/modal';
import { toastActions } from 'redux/toast';
import { userActions } from 'redux/user';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { booksService, userService } from 'services';
import { PostCommentProps } from 'services/userService/types';
import { TBookDetailed } from 'types/book';
import { ToastTypes } from 'types/toast';

import { selectUserId } from './selectors';
import { TExtendedUserInfo, TUserAvatar } from 'types/user';
import { TPutCommentRes } from './types.js';
import prepareToastData from 'helpers/toast/createToast.js';

export function* getExtendedUserInfoSaga({ payload }: ReturnType<typeof userActions.getExtendeUserInfo>) {
  try {
    const data: TExtendedUserInfo = yield call(() => userService.getUserById(payload));
    yield put(userActions.setExtendedUserlInfo(data));
  } catch (e: any) {
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, e.response.data.error.message)));
  }

  yield put(userActions.cancelLoading());
}

export function* updateUserInfoSaga({ payload }: ReturnType<typeof userActions.putUser>) {
  try {
    const userId: number = yield select(selectUserId);
    const updatedUser: TExtendedUserInfo = yield call(() => userService.putUser({ userId, payload }));

    if (updatedUser) yield put(userActions.setUser(updatedUser));
    yield put(userActions.getUserAvatar());

    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.EDIT_USER_DATA_SUCCESS)));
  } catch (e) {
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.EDIT_USER_DATA_ERROR)));
  }

  yield put(userActions.cancelLoading());
}

export function* getUserAvatarSaga() {
  try {
    const userId: number = yield select(selectUserId);
    const avatar: TUserAvatar = yield call(() => userService.getUserAvatar(userId));

    yield put(userActions.setUserAvatar(avatar));
  } catch (e) {}

  yield put(userActions.cancelLoading());
}

export function* updateAvatar({ payload }: ReturnType<typeof userActions.updateAvatarReq>) {
  try {
    const userId: number = yield select(selectUserId);
    const newAvatar: TUserAvatar = yield call(() => userService.postUserAvatar({ userId, payload }));

    yield put(userActions.setUserAvatar(newAvatar));
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.UPLOAD_AVATAR_SUCCESS)));
  } catch (e) {
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.UPLOAD_AVATAR_ERROR)));
  }

  yield put(userActions.cancelLoading());
}

export function* postComment({ payload }: ReturnType<typeof userActions.postComment>) {
  const reqBody: PostCommentProps = { ...payload };
  try {
    yield call(() => userService.postComment(reqBody));

    const bookData: TBookDetailed = yield call(() => booksService.getBookById(payload.bookId));

    yield put(bookActions.setBook(bookData));
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.COMMENTS_SUCCESS)));
  } catch (e) {
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.COMMENTS_ERROR)));
  }

  yield put(modalActions.close());
  yield put(userActions.cancelLoading());
}

export function* putComment({ payload }: ReturnType<typeof userActions.putComment>) {
  try {
    const {
      data: { bookId },
    }: TPutCommentRes = yield call(() => userService.putComment(payload));

    const bookData: TBookDetailed = yield call(() => booksService.getBookById(bookId));
    yield put(bookActions.setBook(bookData));
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.EDIT_COMMENTS_SUCCESS)));
  } catch (e) {
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.EDIT_COMMENTS_ERROR)));
  }

  yield put(modalActions.close());
  yield put(userActions.cancelLoading());
}

function* userSaga() {
  yield all([
    takeLatest(userActions.getExtendeUserInfo, getExtendedUserInfoSaga),
    takeLatest(userActions.putUser, updateUserInfoSaga),
    takeLatest(userActions.getUserAvatar, getUserAvatarSaga),
    takeLatest(userActions.updateAvatarReq, updateAvatar),
    takeLatest(userActions.putComment, putComment),
    takeLatest(userActions.postComment, postComment),
  ]);
}

export default userSaga;
