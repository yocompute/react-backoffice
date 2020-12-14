import { call, put, takeLatest } from "redux-saga/effects";
import {
  FETCH_CATEGORIES,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
  fetchCategoriesSuccess,
  updateCategorySuccess,
  createCategorySuccess,
} from "./category.actions";
import CategoryApi from "../../services/CategoryApi";

export function* fetchCategories(action) {
  try {
    const categories = yield call(CategoryApi.get, action.query);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {}
}

export function* createCategory(action) {
  try {
    const category = yield call(CategoryApi.create, action.data);
    yield put(createCategorySuccess(category));
    const categories = yield call(CategoryApi.get, null);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {}
}

export function* updateCategory(action) {
  try {
    const category = yield call(CategoryApi.update, action.data);
    yield put(updateCategorySuccess(category));
  } catch (error) {}
}

export function* watchCategories() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
  yield takeLatest(CREATE_CATEGORY, createCategory);
  yield takeLatest(UPDATE_CATEGORY, updateCategory);
}
