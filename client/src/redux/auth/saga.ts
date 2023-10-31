import pageRoutes from 'constants/pageRoutes';
import responseText from 'constants/responseText';

import { userActions } from 'redux/user';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { authService } from 'services';

import { authActions } from './slice';
import { TLoginResponse, TRefreshResponse } from './types';
import { toastActions } from 'redux/toast/slice.js';
import prepareToastData from 'helpers/toast/createToast.js';
import { ToastTypes } from 'types/toast.js';

export function* postLoginSaga({ payload }: ReturnType<typeof authActions.postLogin>) {
  const { data, navigate } = payload;

  try {
    const { accessToken, user }: TLoginResponse = yield call(() => authService.postLogin(data));

    localStorage.setItem('token', accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(user));

    yield navigate(pageRoutes.BOOKS_ALL);
  } catch (e) {
    const { response } = e as any;
    if (response?.status === 400) {
      yield put(authActions.setResponseMessage(responseText.AUTH_WRONG_DATA));
      yield put(authActions.setErrorStatus(response.status));
    } else {
      yield put(authActions.setResponseMessage(responseText.AUTH_SMTH_WRONG));
      yield put(authActions.setStep(2));
    }

    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(authActions.cancelLoading());
}

export function* postLogoutSaga() {
  try {
    yield call(() => authService.postLogout());

    localStorage.removeItem('token');
    yield put(userActions.setAuth(false));
    yield put(userActions.setUser({}));
  } catch (e) {
    const { response } = e as any;

    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(authActions.cancelLoading());
}

export function* checkAuthSaga() {
  try {
    const { accessToken, user }: TRefreshResponse = yield call(() => authService.getRefreshAuth());

    localStorage.setItem('token', accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(user));
  } catch (e) {
    const { response } = e as any;

    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }

  yield put(authActions.cancelLoading());
}

function* authSaga() {
  yield all([
    takeLatest(authActions.postLogin, postLoginSaga),
    takeLatest(authActions.postLogout, postLogoutSaga),
    takeLatest(authActions.checkAuth, checkAuthSaga),
  ]);
}

export default authSaga;
