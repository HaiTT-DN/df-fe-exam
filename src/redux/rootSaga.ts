import { all } from "redux-saga/effects";
import createSagaMiddleware from "redux-saga";
import authSaga from "./sagas/authSaga";
import projectsSaga from "./sagas/projectsSaga";

export const sagaMiddleware = createSagaMiddleware();

export default function* rootSaga() {
  yield all([authSaga(), projectsSaga()]);
}
