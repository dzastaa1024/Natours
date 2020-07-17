import React from "react";
import Form from "../Form";
import "./styles.scss";
import "../../_grid.scss";

const BookForm = () => {
  return (
    <section class="section-book">
      <div class="row">
        <div class="book">
          <div class="book__form">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookForm;
