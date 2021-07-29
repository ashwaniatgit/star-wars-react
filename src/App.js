import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './containers/Home';
import Movies from './containers/Movies';
import Planets from './containers/Planets';
import Header from './components/Header';

const routes = () => {
  return <Router>
    <Header></Header>
    <Switch>
      <Route exact path="/">
        <Home></Home>
      </Route>
      <Route exact path="/movies">
        <Movies></Movies>
      </Route>
      <Route exact path="/planets">
        <Planets></Planets>
      </Route>
      {/* <Route path="/:id" children={<Details></Details>}>
        <Details></Details>
      </Route> */}
    </Switch>
  </Router>
}

export default function App() {
  return (routes());
}