import React from "react";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Task from "./Task";
import TaskTable from "./TaskTable";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TaskTable} />
    <Route path="/task/:id" component={Task} />
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
