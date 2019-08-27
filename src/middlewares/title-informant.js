import { ADD_USER, UPDATE_USER, DELETE_USER } from "../actions/user";

const titleInformant = ({ dispatch }) => {
  return function(next) {
    return function(action) {
      if (action.type === ADD_USER) {
        return dispatch({ type: "FOUND_BAD_WORD" });
      }
      return next(action);
    };
  };
};

export default titleInformant;
