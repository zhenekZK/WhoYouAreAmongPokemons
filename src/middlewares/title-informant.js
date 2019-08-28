import { SUCCESS_USER_UPDATE, DELETE_USER } from "../actions/user";
import { ADD_USER_TITLE, SET_DEFAULT_TITLE } from "../actions/title";

const titleInformant = ({ dispatch }) => {
  return function(next) {
    return function(action) {
      console.log("action -> ", action.type);
      console.log(action);
      if (action.type === SUCCESS_USER_UPDATE) {
        let text = `${action.name} was updated with new pokemon - ${
          action.pokemonName
        }`;

        dispatch({
          type: ADD_USER_TITLE,
          text
        });

        setTimeout(() => dispatch({ type: SET_DEFAULT_TITLE }), 3000);
      }
      return next(action);
    };
  };
};

export default titleInformant;
