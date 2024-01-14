import { useState } from "react";
import React from "react";
import "./App.css";

//components
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <h1 className="text-red-500 font-bold text-5xl">Tailwind Test</h1>
      <Header />
      <About />
      <Work />
      <Contact />
    </>
  );
}

export default App;
