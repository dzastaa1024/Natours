import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Features from "./components/Features";
import Tours from "./components/Tours";
import Stories from "./components/Stories";
import BookForm from "./components/BookForm";
import Footer from "./components/Footer";
import "./globalStyles.scss";

export default function App() {
  return (
    <div>
      <Header />
      <About />
      <Features title={"photo1"} content={"content1"} />
      <Tours />
      <Stories />
      <BookForm />
      <Footer />
    </div>
  );
}
