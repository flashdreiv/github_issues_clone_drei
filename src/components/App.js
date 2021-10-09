import React from "react";

import IssueList from "./IssueList";

import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="ui container">
      <h3 className="ui block header">Github Issues </h3>
      <BrowserRouter>
        <Route path="/" component={IssueList} />
        <br />
      </BrowserRouter>
    </div>
  );
};

export default App;
