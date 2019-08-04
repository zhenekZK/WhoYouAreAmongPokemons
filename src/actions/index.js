let userId = 10; // change later on zero

export const addUser = name => ({
  type: "ADD_USER",
  id: ++userId,
  name
});

function generateId() {}
