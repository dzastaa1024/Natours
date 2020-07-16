import React from "react";
import FeaturesItem from "../FeaturesItem";
import "./styles.scss";
import "../../_grid.scss";
import "../../sass/base/_utilities.scss";

const Features = ({ title, content }) => {
  return (
    <section className="section-features">
      <div className="row">
        <FeaturesItem title={title} content={content} />
        <FeaturesItem title={title} content={content} />
        <FeaturesItem title={title} content={content} />
        <FeaturesItem title={title} content={content} />
      </div>
    </section>
  );
};

export default Features;
