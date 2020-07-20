import React from "react";
import "./styles.scss";
import "../../_grid.scss";

const Footer = () => {
  const footerList = [
    "Company",
    "Contact us",
    "Carrers",
    "Privacy policy",
    "Terms",
  ];

  return (
    <footer className="footer">
      <div className="footer__navigation">
        <ul className="footer__list">
          {footerList.map((i, key) => {
            return (
              <li className="footer__item">
                <a href="#" className="footer__link">
                  {i}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
