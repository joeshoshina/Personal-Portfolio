import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import AboutMe from "./components/AboutMe.jsx";
// import Contact from "./components/Contact.jsx";
import TestAPICall from "./components/TestAPICall.jsx";
import BondingGame from "./components/BondingGame.jsx";
import MovieSearchApp from "./components/MovieSearchApp.jsx";

function App() {
  const [activePage, setActivePage] = useState("home");

  const handleNavClick = (page) => {
    if (page === "contact") {
      window.open(
        "https://preeminent-taiyaki-3bc756.netlify.app/Joe%20Hoshina%20Resume.pdf",
        "_blank"
      );
      return; // stop further state update
    }
    setActivePage(page); // Update the active page based on the clicked link
  };

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutMe />;
      case "testAPIcall":
        return <TestAPICall />;
      case "bonding":
        return <BondingGame />;
      case "movie":
        return <MovieSearchApp />;
      case "home":
      default:
        return <Home onCardClick={handleNavClick} />;
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
