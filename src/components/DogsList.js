import React, { Component } from "react";
import { Link } from "react-router-dom";

class DogsList extends Component {
  renderDogBreed(breed) {
    return (
      <li key={breed}>
        <Link to={`/dog-breeds/${breed}`}>{breed}</Link>
      </li>
    );
  }
  render() {
    const { dogBreeds } = this.props;
    return (
      <div className="dogsList">
        <h1>List o' doggos</h1>

        {!dogBreeds && "Loadin' dawgs..."}

        {dogBreeds && <ul> {dogBreeds.map(this.renderDogBreed)}</ul>}
      </div>
    );
  }
}

export default DogsList;
