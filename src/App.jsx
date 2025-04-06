import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional, for toggler

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;
