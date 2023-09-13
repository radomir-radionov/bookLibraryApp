import pageRoutes from 'constants/pageRoutes';
import responseText from 'constants/responseText';

import { userActions } from 'redux/user';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { authService } from 'services';

import { authActions } from './slice';
import { TAuthResponse } from './types';
import { toastActions } from 'redux/toast/slice.js';
import prepareToastData from 'helpers/toast/createToast.js';
import { ToastTypes } from 'types/toast.js';

export function* postAuthData({ payload }: ReturnType<typeof authActions.setAuthData>) {
  const { data, navigate } = payload;

  try {
    const { jwt, user }: TAuthResponse = yield call(() => authService.postAuthentication(data));

    yield put(userActions.setJwt(jwt));
    yield put(userActions.setUserData(user));
    localStorage.setItem('jwt', jwt);
    localStorage.setItem('user', JSON.stringify(user));
    yield put(authActions.cancelLoading());
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

    yield put(authActions.cancelLoading());
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, response?.data.error.message)));
  }
}

function* authSaga() {
  yield all([takeLatest(authActions.setAuthData, postAuthData)]);
}

export default authSaga;
