import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import App from "./App";

const initialStore = ["1", "2", "3", "4", "5"];

function addNews(state = initialStore, action) {
  if (action.type === "FETCH") {
    return action.payload.itemData;
  }
  return state;
}

const store = createStore(addNews, applyMiddleware(thunk));

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
