import React from "react";
import "./styles.scss";
import "../../sass/base/_typography.scss";
import "../../sass/base/_utilities.scss";

const About = () => {
  return (
    <main>
      <secion className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Exiting tours for adventours people
          </h2>
        </div>
        <div className="container">
          <div className="container_col-1">
            <h3 className="heading-tertiary u-margin-bottom-small">
              You are going to fall in love with nature
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">
              Live adventures like you never have before
            </h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>
            <a href="#" className="btn-text">
              Learn more &rarr;
            </a>
          </div>
          <div className="container_col-2">
            <div className="composition">
              <img
                src="../../img/nat-1-large.jpg"
                alt="Photo 1"
                className="composition_photo composition_photo--p1"
              />
              <img
                src="../../img/nat-2-large.jpg"
                alt="Photo 2"
                className="composition_photo composition_photo--p2"
              />
              <img
                src="../../img/nat-3-large.jpg"
                alt="Photo 3"
                className="composition_photo composition_photo--p3"
              />
            </div>
          </div>
        </div>
      </secion>
    </main>
  );
};

export default About;
