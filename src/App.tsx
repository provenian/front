import React from "react";
import { Container } from "semantic-ui-react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Problem from "./view/Problem";
import Index from "./view/Index";
import Submission from "./view/Submission";
import NavBar from "./view/NavBar";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Container style={{ marginTop: "50px" }}>
          <Route exact path="/" component={Index} />
          <Route path="/problems/:problemId" component={Problem} />
          <Route path="/submissions/:submissionId" component={Submission} />
        </Container>
      </div>
    </Router>
  );
};

export default App;
