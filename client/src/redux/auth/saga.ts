import pageRoutes from 'constants/pageRoutes';
import responseText from 'constants/responseText';

import { userActions } from 'redux/user';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { authService } from 'services';

import { authActions } from './slice';
import { TAuthResponse } from './types';

export function* postAuthData({ payload }: ReturnType<typeof authActions.setAuthData>) {
  const { data, navigate } = payload;

  try {
    const res: TAuthResponse = yield call(() => authService.postAuthentication(data));

    yield put(userActions.setJwt(res.jwt));
    yield put(userActions.setUserData(res.user));
    localStorage.setItem('jwt', res.jwt);
    localStorage.setItem('userData', JSON.stringify(res.user));
    yield put(authActions.cancelLoading());
    yield navigate(pageRoutes.BOOKS_ALL);
  } catch (e) {
    const { response } = e as AxiosError;

    if (response?.status === 400) {
      yield put(authActions.setResponseMessage(responseText.AUTH_WRONG_DATA));
      yield put(authActions.setErrorStatus(response.status));
    } else {
      yield put(authActions.setResponseMessage(responseText.AUTH_SMTH_WRONG));
      yield put(authActions.setStep(2));
    }

    yield put(authActions.cancelLoading());
  }
}

function* authSaga() {
  yield all([takeLatest(authActions.setAuthData, postAuthData)]);
}

export default authSaga;
