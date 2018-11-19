import App from "./app.jsx";
import React from "react";
import reducers from './reducer.js'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from "react-dom";

const store = createStore(reducers);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
