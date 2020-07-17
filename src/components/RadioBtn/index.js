import React from "react";
import "./styles.scss";

const RadioBtn = ({ text, size }) => {
  return (
    <div className="form__group u-margin-bottom-medium ">
      <div className="form__radio-group">
        <input
          type="radio"
          className="form__radio-input"
          id="small"
          name="size"
        />
        <label for={size} className="form__radio-label">
          <span className="form__radio-button"></span>
          {text}
        </label>
      </div>
    </div>
  );
};

export default RadioBtn;
