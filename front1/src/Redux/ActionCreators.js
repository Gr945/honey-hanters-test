import {
  ADD_USER,
  DELETE_USER,
  DELETE_USER_SAGA,
  ADD_USER_SAGA,
  INIT_USER_SAGA,
  INIT_USER
} from "./ActionTypes";

//add user ac

export const addUserSagaAC = (name, email, comment) => {
  return {
    type: ADD_USER_SAGA,
    payload: { name, email, comment},
  };
};

export const addUserAC = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

//init users
export const initUserSagaAC = () => {
  return {
    type: INIT_USER_SAGA,
  };
};

export const initUserAC = (payload) => {
  return {
    type: INIT_USER,
    payload,
  };
};

//delete user

export const deleteUserSagaAC = (payload) => {
  return {
    type: DELETE_USER_SAGA,
    payload,
  };
};

export const deleteUserAC = (payload) => {
  return {
    type: DELETE_USER,
    payload,
  };
};
