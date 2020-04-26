import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Layout from "./components/Layout";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={Layout} path="/" exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);
