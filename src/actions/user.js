export const ADD_USER = "ADD_USER";
export const UPDATE_USER = "UPDATE_USER";
export const DELETE_USER = "DELETE_USER";

let userId = 10; // change later on zero
const maxPokemonId = 800;

export const addUser = function(name) {
  return function(dispatch) {
    const id = generateUserId();

    dispatch(createUser(name, id));
  };
};

export const deleteUser = function(id) {
  return {
    type: DELETE_USER,
    id
  };
};

export const updateUser = function(id) {
  return function(dispatch) {
    const pokId = generatePokemonId();

    return fetch(`https://pokeapi.co/api/v2/pokemon/${generatePokemonId()}`)
      .then(response => response.json())
      .then(result => {
        const value = result;
        dispatch({
          type: UPDATE_USER,
          id,
          pokemonId: pokId,
          pokemonName: value.name,
          pokemonImage: value.sprites.front_default
        });
      });
  };
};

function createUser(name, id) {
  return {
    type: ADD_USER,
    id: id,
    pokemonId: generatePokemonId(),
    name
  };
}

function generateUserId() {
  return ++userId;
}

function generatePokemonId() {
  return Math.floor(Math.random() * maxPokemonId) + 1;
}
