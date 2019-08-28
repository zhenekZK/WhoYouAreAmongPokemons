import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import configureStore from "./store/configure-store";
import "./styles/main.css";

const initialState = {
  title: {
    text: "",
    defaultText: "Who you are among pokemons?",
    isDefault: true
  },
  users: [
    {
      id: 1,
      name: "Fedya",
      pokemonId: 123,
      pokemonName: "lalal",
      image: "lalala",
      isLoading: true
    },
    {
      id: 2,
      name: "Olya",
      pokemonId: 321,
      pokemonName: "ffffff",
      image: "fffff",
      isLoading: true
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
