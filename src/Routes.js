import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import NotFound from "./components/shared/NotFound";
import JobPage from "./pages/JobPage/JobPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/positions/:id" component={JobPage} />
        <Route exact path="/" component={HomePage} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}
