import React from "react";
import { Link } from "react-router-dom";
import "./DogBreedImages.css";

function DogBreedImages(props) {
  const images = props.images;
  const breed = props.breed.replace(/^./, props.breed[0].toUpperCase());
  //const key = Math.round(Math.random() * 100000);

  return (
    <div className="dog-breed-images">
      <div className="topBit">
        <h1>{breed} Puppy Pics!!!</h1>
        <Link to="/">
          <div className="backLink">Go back to the index for more PUPPIES!</div>
        </Link>
      </div>
      <div className="puppyPics">
        {images &&
          images.map(url => <img className="puppyPic" src={url} alt="Puppy" />)}
        {!images && "Loadin' puppy-pics..."}
      </div>
    </div>
  );
}

export default DogBreedImages;
