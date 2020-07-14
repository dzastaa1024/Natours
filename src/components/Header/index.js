import React from "react";
import "./styles.scss";

export default function index() {
  return (
    <header className="header">
      <div className="logo-box">
        <img src="../../img/logo-white.png" alt="Logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Outdoors</span>
          <span className="heading-primary-sub">is where life happends</span>
        </h1>
      </div>
    </header>
  );
}
