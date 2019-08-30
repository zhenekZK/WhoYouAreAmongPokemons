import { SUCCESS_USER_UPDATE, DELETE_USER } from "../actions/user";
import { ADD_USER_TITLE, SET_DEFAULT_TITLE } from "../actions/title";

const titleInformant = ({ dispatch, getState }) => {
  return function(next) {
    return function(action) {
      console.log("action -> ", action.type);
      console.log(action);
      if (action.type === SUCCESS_USER_UPDATE) {
        let text = `${getUserNameById(
          action.id,
          getState().users
        )} was updated with new pokemon - ${action.pokemonName}`;

        dispatch({
          type: ADD_USER_TITLE,
          text
        });

        setTimeout(() => dispatch({ type: SET_DEFAULT_TITLE }), 3000);
      }
      if (action.type === DELETE_USER) {
        let text = `${getUserNameById(
          action.id,
          getState().users
        )} was deleted`;

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

function getUserNameById(id, users) {
  let name = "";

  for (let user of users) {
    if (user.id === id) {
      name = user.name;
      break;
    }
  }

  return name;
}

export default titleInformant;
