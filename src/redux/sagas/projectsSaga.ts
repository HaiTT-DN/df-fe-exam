import { all, call, put, takeEvery } from "redux-saga/effects";
import { projectsConstant, REQUEST } from "../constants";
import {
  getProjectFailure,
  getProjectSuccess,
} from "../actions/projectsActions";
import Api from "@/services/axiosService";

function* getProjects() {
  try {
    const response = yield call(
      Api.get,
      "https://frontend-exam.digitalfortress.dev/projects"
    );

    yield put(getProjectSuccess(response.data));
  } catch (error) {
    yield put(getProjectFailure(error.message));
  }
}

function* projectsSaga() {
  yield all([takeEvery(REQUEST(projectsConstant.GET_PROJECTS), getProjects)]);
}

export default projectsSaga;
