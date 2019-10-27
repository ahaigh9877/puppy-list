import React, { Component } from "react";
import DogsList from "./DogsList";

class DogsListContainer extends Component {
  state = {
    dogBreeds: null,
    dogImages: null
  };

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then(res => res.json())
      .then(data => Object.keys(data.message))
      .then(breedNames => this.setState({ dogBreeds: breedNames }))
      .catch(console.error);
  }

  render() {
    return <DogsList dogBreeds={this.state.dogBreeds} />;
  }
}

export default DogsListContainer;
