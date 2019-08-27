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
      console.log(state);
      return state.map(user =>
        user.id === action.id
          ? {
              ...user,
              pokemonId: action.pokemonId,
              pokemonName: action.pokemonName,
              image: action.pokemonImage
            }
          : user
      );
    case DELETE_USER:
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
}
