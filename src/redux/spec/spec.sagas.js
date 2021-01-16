import { put, call, takeLatest } from "redux-saga/effects";

import {
  FETCH_SPECS,
  CREATE_SPEC,
  UPDATE_SPEC,
  fetchSpecsSuccess,
  fetchSpecsFail,
  createSpecSuccess,
  updateSpecSuccess,
} from "./spec.actions";

import SpecApi from "../../services/SpecApi";

export function* fetchSpecs(action) {
  try {
    const specs = yield call(SpecApi.get, action.query);
    yield put(fetchSpecsSuccess(specs));
  } catch (error) {
    yield put(fetchSpecsFail(error));
  }
}

export function* createSpec(action) {
  try {
    const spec = yield call(SpecApi.create, action.data);
    yield put(createSpecSuccess(spec));
    const specs = yield call(SpecApi.get, null);
    yield put(fetchSpecsSuccess(specs));
  } catch (error) {
    // yield put(addError({
    //     ...error
    // }))
  }
}

export function* updateSpec(action) {
  try {
    const spec = yield call(SpecApi.update, action.data, action.id);
    yield put(updateSpecSuccess(spec));
    const specs = yield call(SpecApi.get, null);
    yield put(fetchSpecsSuccess(specs));
  } catch (error) {
    // yield put(addError({
    //     ...error
    // }))
  }
}

export function* watchSpecs() {
  yield takeLatest(FETCH_SPECS, fetchSpecs);
  yield takeLatest(CREATE_SPEC, createSpec);
  yield takeLatest(UPDATE_SPEC, updateSpec);
}
