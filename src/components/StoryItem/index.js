import React from "react";
import "./styles.scss";

const StoryItem = () => {
  return (
    <div class="row">
      <div class="story">
        <figure className="story__shape">
          <img
            src="../../img/nat-8.jpg"
            alt="Person on a tour"
            className="story__img"
          />
          <figcaption className="story__caption">Mary Smith</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I had the best week ever with my family
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
