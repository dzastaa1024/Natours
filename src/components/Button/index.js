import React from "react";
import "./styles.scss";

const Button = ({ text }) => {
  return (
    <a href="#" className="btn btn--white btn--animated">
      {text}
    </a>
  );
};

export default Button;
