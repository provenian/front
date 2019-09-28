import React from "react";
import { Container, Grid } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Problem from "./view/Problem";
import Index from "./view/Index";
import Submission from "./view/Submission";
import NavBar from "./view/root/NavBar";
import NewProblem from "./view/NewProblem";
import ListProblems from "./view/ListProblems";
import HowToUse from "./view/HowToUse";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <div style={{ marginTop: "50px" }}>
          <Route exact path="/" component={Index} />
          <Route
            exact
            path="/me/problems"
            render={props => <ListProblems draft={true} {...props} />}
          />
          <Route
            exact
            path="/me/problems/:problemId"
            render={props => <Problem draft={true} {...props} />}
          />
          <Route exact path="/problem/new" component={NewProblem} />
          <Route exact path="/problems" component={ListProblems} />
          <Route
            exact
            path="/problems/:problemId"
            render={props => <Problem draft={false} {...props} />}
          />
          <Route path="/submissions/:submissionId" component={Submission} />
          <Route path="/how-to-use" component={HowToUse} />
        </div>
      </div>
    </Router>
  );
};

export default App;
