import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { authApiResponseError, authApiResponseSuccess } from "./actions";
import { LOGIN, SIGNUP, LOGOUT } from "./constants";
import { setAuthorization } from "@/services/apiCore";
import { Auth } from "aws-amplify";
import toast from "react-hot-toast";

function* login({ payload }: any): any {
  try {
    const response = yield Auth.signIn(payload.email, payload.password);
    const auth = {
      email: response?.attributes?.email,
      email_verified: response?.attributes?.email_verified,
    };
    yield call(toast.success, "Login Success");
    yield put(authApiResponseSuccess(LOGIN, auth));
  } catch (error: any) {
    yield call(toast.error, error.message);
    yield put(authApiResponseError(LOGIN, error));
  }
}

function* signup({ payload }: any): any {
  try {
    const response = yield call(Auth.signUp, payload);
    yield put(authApiResponseSuccess(SIGNUP, response));
  } catch (error: any) {
    yield call(toast.error, error.message);
    yield put(authApiResponseError(SIGNUP, error));
  }
}

function* logout(): any {
  try {
    const response = yield call(Auth.signOut);
    yield put(authApiResponseSuccess(LOGOUT, response));
  } catch (error: any) {
    yield call(toast.error, error.message);
    yield put(authApiResponseError(LOGOUT, error));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}

export function* watchSignup() {
  yield takeEvery(SIGNUP, signup);
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}

export default function* authSaga() {
  yield all([fork(watchLogin), fork(watchSignup), fork(watchLogout)]);
}
