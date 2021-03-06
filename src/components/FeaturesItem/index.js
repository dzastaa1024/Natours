import React from "react";
import "./styles.scss";
import "../../_grid.scss";
import "../../sass/base/_typography.scss";
import "../../sass/base/_utilities.scss";

const FeaturesItem = ({ title, content }) => {
  return (
    <div className="col-1-of-4">
      <div className="feature-box">
        <i className="feature-box__icon icon-basic-world"></i>
        <h3 className="heading-tertiary u-margin-bottom-small">{title}</h3>
        <p className="feature-box__text"> {content}</p>
      </div>
    </div>
  );
};

export default FeaturesItem;
