export const ADD_USER = "ADD_USER";
export const START_USER_UPDATE = "START_USER_UPDATE";
export const SUCCESS_USER_UPDATE = "SUCCESS_USER_UPDATE";
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
  return function(dispatch, getState) {
    const pokId = generatePokemonId();

    const name = getUserNameById(id, getState().users);

    dispatch({
      type: START_USER_UPDATE,
      id,
      isLoading: true
    });

    return fetch(`https://pokeapi.co/api/v2/pokemon/${pokId}`)
      .then(response => response.json())
      .then(result => {
        const value = result;
        dispatch({
          type: SUCCESS_USER_UPDATE,
          id,
          name,
          pokemonId: pokId,
          pokemonName: value.name,
          pokemonImage: value.sprites.front_default
        });
      });
  };
};

function getUserNameById(id, users) {
  let name = "";

  for (let user of users) {
    if (user.id == id) {
      name = user.name;
      break;
    }
  }

  return name;
}

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
