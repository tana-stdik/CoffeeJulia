import React, { useRef, useState } from "react";

export default function CoffeeInfo({ title, description, image, ingredients }) {
  const [showingPictures, setShowingPictures] = useState(false);
  const showDetailsText = useRef("Show");
  if (showingPictures) {
    return (
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="picture">
          <img
            src={image}
            alt="some-coffee"
            style={{ width: "50%", height: "50%", paddingRight: "7%" }}
          />
          <p style={{ width: "40%" }}>
            <b>Ingredients:</b>{" "}
            {ingredients &&
              ingredients.reduce((p, c) => p + (p !== "" ? ", " : "") + c, "")}
          </p>
        </div>
        <br />
        <button className="button-30" onClick={showCoffeePictures}>
          {showDetailsText.current} details
        </button>
        <hr />
      </div>
    );
  } else {
    return (
      <h3 className="nameCoffee" onClick={showCoffeePictures}>
        {title}
      </h3>
    );
  }

  function showCoffeePictures() {
    if (showingPictures) {
      showDetailsText.current = "Show";
      setShowingPictures(false);
    } else {
      showDetailsText.current = "Hide";
      setShowingPictures(true);
    }
  }
}
