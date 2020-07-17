import React from "react";
import FormInput from "../FormInput";
import RadioBtn from "../RadioBtn";
import "./styles.scss";

const Form = () => {
  return (
    <form action="#" className="form">
      <div className="u-margin-bottom-medium">
        <h2 className="heading-secondary">Start booking now</h2>
        <FormInput name={"Full name"} placeholderText={"Full name"} />
        <FormInput name={"Email address"} placeholderText={"Email addres"} />
        <RadioBtn text={"Small tour group"} size={"small"} />
        <RadioBtn text={" Large tour group"} size={"large"} />
        <div className="form__group">
          <a href="#popup" className="btn btn--green">
            Next step
          </a>
        </div>
      </div>
    </form>
  );
};

export default Form;
