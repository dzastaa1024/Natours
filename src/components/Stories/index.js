import React from "react";
import "./styles.scss";
import "../../sass/base/_utilities.scss";
import "../../sass/base/_typography.scss";
import StoryItem from "../StoryItem";
import BGVideo from "../BGVideo";

const Stories = () => {
  return (
    <section className="section-stories">
      <div class="u-center-text u-margin-bottom-big">
        <h2 class="heading-secondary">We make people genuinely happy</h2>
      </div>
      <StoryItem />
      <StoryItem />
      <div class="u-center-text u-margin-top-huge">
        <a href="#" class="btn-text">
          Read all stories &rarr;
        </a>
      </div>
      <BGVideo />
    </section>
  );
};

export default Stories;
