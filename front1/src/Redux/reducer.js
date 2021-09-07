import { ADD_USER, INIT_USER, DELETE_USER } from "./ActionTypes";

const initialState = { allUsers: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case INIT_USER:
      return { ...state, allUsers: action.payload };
    case ADD_USER:
      return { ...state, allUsers: [...state.allUsers, action.payload] };
    case DELETE_USER:
      return {
        ...state,
        allUsers: state.allUsers.filter((el) => el._id !== action.payload._id),
      };

    default:
      return state;
  }
}
