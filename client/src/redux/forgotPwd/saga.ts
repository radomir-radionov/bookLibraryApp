import responseText from 'constants/responseText';

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { authService } from 'services';

import { forgotPwdActions } from './slice';

export function* postForgotPwd({ payload }: ReturnType<typeof forgotPwdActions.postForgotPwd>) {
  try {
    yield call(() => authService.postForgotPwd(payload));
    yield put(forgotPwdActions.setDefiniteStep(2));
  } catch (e) {
    yield put(forgotPwdActions.setResponseMessage(responseText.FORGOT_PWD_ERROR));
    yield put(forgotPwdActions.setDefiniteStep(1));
  }
}

export function* postResetPwd({ payload }: ReturnType<typeof forgotPwdActions.postResetPwd>) {
  try {
    yield call(() => authService.postResetPwd(payload));
    yield put(forgotPwdActions.setDefiniteStep(4));
  } catch (e) {
    yield put(forgotPwdActions.setResponseMessage(responseText.FORGOT_PWD_SMTH_WRONG));
    yield put(forgotPwdActions.setResetPwdData(payload));
    yield put(forgotPwdActions.setDefiniteStep(5));
  }
}

function* forgotPwdSaga() {
  yield all([takeLatest(forgotPwdActions.postForgotPwd, postForgotPwd)]);
  yield all([takeLatest(forgotPwdActions.postResetPwd, postResetPwd)]);
}

export default forgotPwdSaga;
