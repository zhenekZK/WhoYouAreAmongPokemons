import {
  ADD_USER,
  SUCCESS_USER_UPDATE,
  DELETE_USER,
  START_USER_UPDATE
} from "../actions/user";

const initialState = {};

export default function(state = initialState, action) {
  // console.log(state);
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
    case START_USER_UPDATE:
      return state.map(user =>
        user.id === action.id
          ? {
              ...user,
              isLoading: true
            }
          : user
      );
    case SUCCESS_USER_UPDATE:
      return state.map(user =>
        user.id === action.id
          ? {
              ...user,
              pokemonId: action.pokemonId,
              pokemonName: action.pokemonName,
              image: action.pokemonImage,
              isLoading: false
            }
          : user
      );
    case DELETE_USER:
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
}
