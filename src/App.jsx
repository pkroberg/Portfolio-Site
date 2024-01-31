import { useState } from "react";
import React from "react";
import "./App.css";

//components
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
