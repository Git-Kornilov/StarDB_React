import React, { Component } from "react";
import Row from "../row";

import { StarshipList, StarshipDetails } from "../sw-components/index";

export default class StashipsPage extends Component {
  state = {
    selectedItem: null,
  };

  onItemSelected = (selectedItem) => {
    this.setState({ selectedItem });
  };

  render() {
    const { selectedItem } = this.state;

    return (
      <Row
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={selectedItem} />}
      />
    );
  }
}
