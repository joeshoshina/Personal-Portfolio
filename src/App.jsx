import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";

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
