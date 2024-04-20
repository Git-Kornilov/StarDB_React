import React, { Component } from "react";

import Header from "../header";
import RandomPlanet from "../random-planet";
import ErrorBoundry from "../error-boundry";
import SwapiService from "../../services/swapi-service";

import { PeoplePage, PlanetsPage, StashipsPage } from "../pages";

import { SwapiServiceProvider } from "../swapi-service-context";

import "./app.css";

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
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StashipsPage />
          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
