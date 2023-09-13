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

import { selectUserDataId } from './selectors';
import { TExtendedUserInfo } from 'types/user';
import { TPutCommentRes } from './types.js';
import prepareToastData from 'helpers/toast/createToast.js';

export function* clearUserData() {
  yield localStorage.removeItem('jwt');
  yield localStorage.removeItem('user');
}

export function* getUser({ payload }: ReturnType<typeof userActions.getUser>) {
  try {
    const data: TExtendedUserInfo = yield call(() => userService.getUser(payload));
    console.log(data);
    yield put(userActions.setAdditionalInfo(data));
    yield put(userActions.cancelLoading());
  } catch (e: any) {
    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, e.response.data.error.message)));
  }
}

export function* putUser({ payload }: ReturnType<typeof userActions.putUser>) {
  try {
    const userId: number = yield select(selectUserDataId);
    console.log('putUser', payload);
    console.log('userId', userId);
    const updatedUser: TExtendedUserInfo = yield call(() => userService.putUser({ userId, payload }));

    if (updatedUser) {
      yield put(userActions.setUserData(updatedUser));
    }

    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.EDIT_USER_DATA_SUCCESS)));
  } catch (e) {
    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.EDIT_USER_DATA_ERROR)));
  }
}

export function* updateAvatar({ payload }: ReturnType<typeof userActions.updateAvatarReq>) {
  try {
    const userId: number = yield select(selectUserDataId);
    const newAvatar: TBookDetailed = yield call(() => userService.putUserAvatar({ userId, payload }));
    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.UPLOAD_AVATAR_SUCCESS)));
  } catch (e) {
    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.UPLOAD_AVATAR_ERROR)));
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
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.COMMENTS_SUCCESS)));
  } catch (e) {
    yield put(modalActions.close());
    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.COMMENTS_ERROR)));
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
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.EDIT_COMMENTS_SUCCESS)));
  } catch (e) {
    yield put(modalActions.close());
    yield put(userActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.EDIT_COMMENTS_ERROR)));
  }
}

function* userSaga() {
  yield all([
    takeLatest(userActions.getUser, getUser),
    takeLatest(userActions.putUser, putUser),
    takeLatest(userActions.updateAvatarReq, updateAvatar),
    takeLatest(userActions.putComment, putComment),
    takeLatest(userActions.postComment, postComment),
    takeLatest(userActions.clearUser, clearUserData),
  ]);
}

export default userSaga;
