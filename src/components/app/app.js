import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { PeoplePage, PlanetsPage, StashipsPage } from "../pages";

import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Welcome = () => {
  return <h2> Welcome to StarDB </h2>;
};

export default class App extends Component {
  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = ({ swapiService }) => {
    this.setState((state) => {
      const Service = SwapiService; // if ... new Service

      console.log("Maybe change Service");

      return {
        swapiService: new Service(),
      };
    });
  };

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />

              <Routes>
                <Route path="/" element={<Welcome />} exact={true} />

                {/* <Route path="/people" component={PeoplePage} /> */}
                <Route path="/people" element={<PeoplePage />} />

                {/* <Route path="/planets" component={PlanetsPage} /> */}
                <Route path="/planets" element={<PlanetsPage />} />

                {/* <Route path="/starships" component={StashipsPage} /> */}
                <Route path="/starships" element={<StashipsPage />} />
              </Routes>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
