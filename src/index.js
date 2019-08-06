import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store/configure-store";

const initialState = {
  users: [
    {
      id: 1,
      name: "Fedya",
      pokemonId: 234
    },
    {
      id: 2,
      name: "Olya",
      pokemonId: 524
    },
    {
      id: 3,
      name: "Yuriy",
      pokemonId: 128
    }
  ]
};

const store = configureStore(initialState);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
