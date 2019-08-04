let userId = 10; // change later on zero

export const addUser = name => ({
  type: "ADD_USER",
  id: generateId(),
  name
});

function generateId() {
  return ++userId;
}
