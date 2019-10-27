import React from "react";
import { Link } from "react-router-dom";

function DogBreedImages(props) {
  const images = props.images;
  const breed = props.breed.replace(/^./, props.breed[0].toUpperCase());

  return (
    <div className="dog-breed-images">
      <h1>{breed} Puppy Pics!!!</h1>
      <Link to="/">Go back to the index for more puppies!</Link>
      <div>
        {images && images.map(url => <img src={url} alt="Puppy" />)}
        {!images && "Loadin' puppy-pics..."}
      </div>
    </div>
  );
}

export default DogBreedImages;
