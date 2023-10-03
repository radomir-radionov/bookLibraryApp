import responseText from 'constants/responseText';

import { all, call, put, takeLatest } from 'redux-saga/effects';
import { authService } from 'services';

import { forgotPwdActions } from './slice';
import { toastActions } from 'redux/toast/slice.js';
import prepareToastData from 'helpers/toast/createToast.js';
import { ToastTypes } from 'types/toast.js';

export function* postForgotPwd({ payload }: ReturnType<typeof forgotPwdActions.postForgotPwd>) {
  try {
    yield call(() => authService.postForgotPwd(payload));
    yield put(forgotPwdActions.setDefiniteStep(2));
  } catch (e) {
    yield put(forgotPwdActions.setDefiniteStep(1));
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.FORGOT_PWD_ERROR)));
  }
}

export function* postResetPwd({ payload }: ReturnType<typeof forgotPwdActions.postResetPwd>) {
  try {
    console.log(payload);
    yield call(() => authService.postResetPwd(payload));
    yield put(forgotPwdActions.setDefiniteStep(4));
    yield put(toastActions.addToast(prepareToastData(ToastTypes.SUCCESS, responseText.FORGOT_PWD_SUCCESS)));
  } catch (e) {
    yield put(forgotPwdActions.setResetPwdData(payload));
    yield put(forgotPwdActions.setDefiniteStep(5));
    yield put(toastActions.addToast(prepareToastData(ToastTypes.ERROR, responseText.FORGOT_PWD_SMTH_WRONG)));
  }
}

function* forgotPwdSaga() {
  yield all([takeLatest(forgotPwdActions.postForgotPwd, postForgotPwd)]);
  yield all([takeLatest(forgotPwdActions.postResetPwd, postResetPwd)]);
}

export default forgotPwdSaga;
