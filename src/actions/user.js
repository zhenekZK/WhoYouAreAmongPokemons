export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";

let userId = 10; // change later on zero
const maxPokemonId = 800;

export const addUser = function(name) {
  return function(dispatch) {
    const id = generateId();

    dispatch(createUser(name, id));
  };
};

function createUser(name, id) {
  return {
    type: ADD_USER,
    id: id,
    pokemonId: Math.floor(Math.random() * maxPokemonId) + 1,
    name
  };
}

function generateId() {
  return ++userId;
}
