import React from "react";
import ItemList from "../item-list";
import {
  withData,
  withSwapiService,
  compose,
  withChildFunction,
} from "../hoc-helpers";

const renderName = ({ name }) => {
  return <span>{name}</span>;
};

const renderModelAnName = ({ model, name }) => {
  return (
    <span>
      {name} ({model})
    </span>
  );
};

const mapPersonMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPeople,
  };
};

const mapPlanetMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllPlanets,
  };
};

const mapStarshipMethodsToProps = (swapiService) => {
  return {
    getData: swapiService.getAllStarships,
  };
};

const PersonList = compose(
  withSwapiService(mapPersonMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  withSwapiService(mapPlanetMethodsToProps),
  withData,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  withSwapiService(mapStarshipMethodsToProps),
  withData,
  withChildFunction(renderModelAnName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
