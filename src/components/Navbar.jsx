import React from "react";

const Navbar = () => {
  return (
    <>
      <a>
        <span className="nav-item">Joe's Website</span>
      </a>

      <ul className="nav nav-underline nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">
            Disabled
          </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
