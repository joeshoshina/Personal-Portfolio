import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Optional, for toggler

import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home.jsx";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    setActivePage(page); // Update the active page based on the clicked link
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <About />;
      case "contact":
        return <Contact />;
      case "testAPIcall":
        // Placeholder for testAPIcall component
        return <div>testAPIcall</div>;
      case "home":
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Navbar page={activePage} onSelect={handleNavClick} />
      <main>{renderPage()}</main>
    </div>
  );
}

export default App;
