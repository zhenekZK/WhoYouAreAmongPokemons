import { ADD_USER, UPDATE_USER } from "../actions/user";

const initialState = {};

export default function(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case ADD_USER:
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          pokemonId: action.pokemonId
        }
      ];
    case UPDATE_USER:
      return state;
    default:
      return state;
  }
}
