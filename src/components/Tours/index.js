import React from "react";
import Card from "../Card";
import "./styles.scss";
import "../../_grid.scss";
import "../../sass/base/_typography.scss";
import "../../sass/base/_utilities.scss";

const Tours = () => {
  return (
    <section className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular tours</h2>
      </div>
      <div className="row">
        <Card />
        <Card />
        <Card />
      </div>
      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn btn--green">
          Discover all tours
        </a>
      </div>
    </section>
  );
};

export default Tours;
