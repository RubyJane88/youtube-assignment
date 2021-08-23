import React from "react";

import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";
import { GlobalStyle } from "./global.style";
import Routes from "./Routes";

/* insert providers here */
const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
