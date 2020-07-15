import React from "react";
import Button from "../Button/index";
import "./styles.scss";
import "../../sass/base/_typography.scss";
import "../../sass/base/_animations.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img
          src="../../img/logo-white.png"
          alt="Logo"
          className="header__logo"
        />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happends</span>
        </h1>
        <Button text={"Discover our tours"} />
        {/* <a href="#" className="btn btn--white btn--animated">
          Discover our tours
        </a> */}
      </div>
    </header>
  );
};

export default Header;
