import { ADD_USER, UPDATE_USER, DELETE_USER } from "../actions/user";

const initialState = {};

export default function(state = initialState, action) {
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
      return state.map(user =>
        user.id === action.id ? { ...user, pokemonId: action.pokemonId } : user
      );
    case DELETE_USER:
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
}
