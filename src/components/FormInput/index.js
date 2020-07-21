import React from "react";
import "./styles.scss";

const FormInput = ({ name, placeholderText }) => {
  return (
    <div class="form__group">
      <input
        type="text"
        className="form__input"
        placeholder={placeholderText}
        id="name"
        required
      />
      <label for="name" className="form__label">
        {name}
      </label>
    </div>
  );
};

export default FormInput;
