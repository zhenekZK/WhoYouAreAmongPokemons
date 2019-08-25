import { ADD_USER_TITLE, SET_DEFAULT_TITLE } from "../actions/title";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_DEFAULT_TITLE:
      return {
        ...state,
        isDefault: true
      };
    case ADD_USER_TITLE:
      return {
        ...state,
        userName: action.userName
      };
    default:
      return state;
  }
}
