import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./login";
import DashboardPage from "./dashboard";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/"><DashboardPage /></Route>
                <Route exact path="/login"><LoginPage /></Route>
                <Route render={() => (<Redirect to="/" />)} />
            </Switch>
        </Router>
    );
}

export default App;