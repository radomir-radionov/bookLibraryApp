import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { userActions } from 'redux/user';
import { AxiosError } from 'axios';
import { authService } from 'services';
import { TPostRegistrationPayload } from 'services/authService/types';

import { selectRegistrationData } from './selectors';
import { registrationActions } from './slice';
import { TRegistrationResponse } from 'redux/auth/types';

import responseText from 'constants/responseText';

export function* postRegistrationSaga() {
  const registrationData: TPostRegistrationPayload = yield select(selectRegistrationData);

  try {
    const { accessToken, user }: TRegistrationResponse = yield call(() =>
      authService.postRegistration(registrationData)
    );

    localStorage.setItem('token', accessToken);
    yield put(userActions.setAuth(true));
    yield put(userActions.setUser(user));

    yield put(registrationActions.setDefiniteStep(4));
  } catch (e) {
    const { response } = e as AxiosError;

    if (response?.status === 400) {
      yield put(registrationActions.setResponseMessage(responseText.REGISTRATION_DATA_NOT_UNIQ));
      yield put(registrationActions.setDefiniteStep(6));
    } else {
      yield put(registrationActions.setResponseMessage(responseText.REGISTRATION_SMTH_WRONG));
      yield put(registrationActions.setDefiniteStep(5));
    }
  }
}

function* registrationSaga() {
  yield all([takeLatest(registrationActions.postRegistration, postRegistrationSaga)]);
}

export default registrationSaga;
