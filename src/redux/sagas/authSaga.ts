import { all, call, delay, put, takeEvery } from "redux-saga/effects";
import {
  loginSuccess,
  loginFailure,
  refreshTokenSuccess,
  refreshTokenFailure,
  refreshTokenRequest,
} from "../actions/authActions";
import { authConstants, REQUEST } from "../constants";
import {
  setAccessToken,
  setRefreshToken,
  tokenIsExpired,
} from "@/services/cookieService";
import Api from "@/services/axiosService";

function* login(action) {
  try {
    const response = yield call(
      Api.post,
      "https://frontend-exam.digitalfortress.dev/auth/login",
      action.payload
    );
    const { access_token, refresh_token } = response.data;
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    yield put(loginSuccess(access_token));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* refreshToken() {
  try {
    const response = yield call(
      Api.refreshToken,
      "https://frontend-exam.digitalfortress.dev/auth/refresh-token"
    );
    const { access_token, refresh_token } = response.data;
    setAccessToken(access_token);
    setRefreshToken(refresh_token);
    yield put(refreshTokenSuccess());
  } catch (error) {
    yield put(refreshTokenFailure(error.message));
  }
}

function* watchTokenExpiry() {
  while (true) {
    yield delay(60000);
    if (tokenIsExpired()) {
      yield put(refreshTokenRequest());
    }
  }
}

function* authSaga() {
  yield all([takeEvery(REQUEST(authConstants.LOGIN), login)]);
  yield all([takeEvery(REQUEST(authConstants.REFRESH_TOKEN), refreshToken)]);
  yield watchTokenExpiry();
}

export default authSaga;
