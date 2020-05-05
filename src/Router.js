import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Error from "./Pages/Error";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import AllCourses from "./Pages/AllCourses";
import Course from "./Pages/Course";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={Dashboard} path="/dashboard" />
      <Route component={AllCourses} path="/course" />
      <Route component={Course} path="/watch" />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);
