import React, { Component } from "react";
import { Link } from "react-router-dom";
// import dogPaw from "./dog-paw.svg";

class DogsList extends Component {
  renderDogBreed(breed) {
    return (
      <Link className="breedText" to={`/dog-breeds/${breed}`}>
        <div className="singleBreed" key={breed}>
          {breed}
        </div>
      </Link>
    );
  }
  render() {
    const { dogBreeds } = this.props;
    return (
      <div className="dogsList">
        <div className="title">
          {/* <img className="doggPaw" src={dogPaw} alt="dogg-paw" /> */}
          <h1>A big ol' list o' puppy breeds for Ana</h1>
          {/* <img className="doggPaw" src={dogPaw} alt="dogg-paw" /> */}
        </div>

        {!dogBreeds && "Loadin' dawgs..."}

        <div className="allThePups">
          {dogBreeds && dogBreeds.map(this.renderDogBreed)}
        </div>
      </div>
    );
  }
}

export default DogsList;
