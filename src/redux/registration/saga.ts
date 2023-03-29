import responseText from 'constants/responseText';

import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { AxiosError } from 'axios';
import { authService } from 'services';
import { PostRegistrationProps } from 'services/authService/types';

import { selectRegistrationData } from './selectors';
import { registrationActions } from './slice';

export function* postRegistrationData() {
  const registrationData: PostRegistrationProps = yield select(selectRegistrationData);

  try {
    yield call(() => authService.postRegistration(registrationData));
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
  yield all([takeLatest(registrationActions.postRegistrationData, postRegistrationData)]);
}

export default registrationSaga;
