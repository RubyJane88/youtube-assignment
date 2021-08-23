import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WatchVideoPage from "./pages/WatchVideoPage";
import SearchResultsScreen from "./components/SearchResultsScreen";
import Layout from "./views/Layout";

/* React Router 5's nesting routes */
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Layout>
          <HomePage />
        </Layout>
      </Route>

      <Route path="/search/:query">
        <Layout>
          <SearchResultsScreen />
        </Layout>
      </Route>
      <Route path="/watch/:id">
        <Layout>
          <WatchVideoPage />
        </Layout>
      </Route>

      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export default Routes;
