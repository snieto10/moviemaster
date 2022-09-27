import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import "./App.css";
import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import Home from "./components/home";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";

class App extends Component {
  state = {};
  render() {
    return (
      <main className="container">
        <NavBar />
        <Switch>
          <Route path="/movies/:id/" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Redirect from="/home" to="/movies" />
          <Route path="/notfound" component={NotFound} />
          <Route path="/rentals" component={Rentals} />
          <Redirect to="/notfound" />
        </Switch>
      </main>
    );
  }
}

export default App;
