import React from "react";
import Form from "./Form";
import CompleteWeather from "./CompleteWeather";
import DailyWeather from "./DailyWeather";
import PageNotFound from "./PageNotFound";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <h1 className="text-center mt-3">Weather App</h1>
        <Form />
        <Switch>
          <Route exact path="/" component={CompleteWeather} />
          <Route exact path="/:day" component={DailyWeather} />
          <Route component={PageNotFound} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
