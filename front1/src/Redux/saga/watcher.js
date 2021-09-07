import { call, put, takeEvery } from "redux-saga/effects";
import {
  DELETE_USER_SAGA,
  ADD_USER_SAGA,
  INIT_USER_SAGA,
} from "../ActionTypes";
import { fetchAddUser } from "./async/fetchAddUser";
import { addUserAC, initUserAC, deleteUserAC } from "../ActionCreators";
import { fetchInitUser } from "./async/fetchInitUser";
import { fetchDeleteUser } from "./async/fetchDeleteUser";

//add worker
export function* workerAddUser(action) {
  try {
    const newUser = yield call(fetchAddUser, action.payload);
    yield put(addUserAC(newUser));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}
//init worker
export function* workerInitUser() {
  try {
    console.log('start')
    const allUser = yield call(fetchInitUser);
    console.log(allUser)
    yield put(initUserAC(allUser));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}
//delete worker
export function* workerDeleteUser(action) {
  try {
    const id = yield call(fetchDeleteUser, action.payload);
    yield put(deleteUserAC(id));
  } catch (e) {
    yield put({ type: "error", message: e.message });
  }
}

export function* watcher() {
  yield takeEvery(ADD_USER_SAGA, workerAddUser);
  yield takeEvery(INIT_USER_SAGA, workerInitUser);
  yield takeEvery(DELETE_USER_SAGA, workerDeleteUser);
}
