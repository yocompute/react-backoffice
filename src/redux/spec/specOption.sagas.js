import { put, call, select, takeLatest } from "redux-saga/effects";

import {
  FETCH_SPEC_OPTIONS,
  CREATE_SPEC_OPTION,
  UPDATE_SPEC_OPTION,
  fetchSpecOptionsSuccess,
  fetchSpecOptionsFail,
  createSpecOptionSuccess,
  updateSpecOptionSuccess,
} from "./specOption.actions";

import SpecOptionApi from "../../services/SpecOptionApi";

export function* fetchSpecOptions(action) {
  try {
    const specOptions = yield call(SpecOptionApi.get, action.query);
    yield put(fetchSpecOptionsSuccess(specOptions));
  } catch (error) {
    yield put(fetchSpecOptionsFail(error));
  }
}

export function* createSpecOption(action) {
  try {
    const specOption = yield call(SpecOptionApi.create, action.data);
    yield put(createSpecOptionSuccess(specOption));
    const specOptions = yield call(SpecOptionApi.get, null);
    yield put(fetchSpecOptionsSuccess(specOptions));
  } catch (error) {
    // yield put(addError({
    //     ...error
    // }))
  }
}

export function* updateSpecOption(action) {
  try {
    const specOption = yield call(SpecOptionApi.update, action.data, action.id);
    yield put(updateSpecOptionSuccess(specOption));
    const specOptions = yield call(SpecOptionApi.get, null);
    yield put(fetchSpecOptionsSuccess(specOptions));
  } catch (error) {
    // yield put(addError({
    //     ...error
    // }))
  }
}

export function* watchSpecOptions() {
  yield takeLatest(FETCH_SPEC_OPTIONS, fetchSpecOptions);
  yield takeLatest(CREATE_SPEC_OPTION, createSpecOption);
  yield takeLatest(UPDATE_SPEC_OPTION, updateSpecOption);
}
