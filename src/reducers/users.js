const initialState = {};

export default function(state = initialState, action) {
  // debugger;
  console.log(action);
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.name];
    case "UPDATE_USER":
      return state;
    default:
      return state;
  }
}
