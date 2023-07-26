"use client";
import { useState } from "react";
import NavItem from "./NavItem";
import { GiPapers } from "react-icons/gi";
function Navbar() {
  const [collapse, setCollapse] = useState("collapse");
  return (
    <div className="fixed-top bg-purple" id="navbar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <a className="navbar-brand text-light" href="#">
            <span>
              <GiPapers />
            </span>
            Blog.
          </a>
          <button className="navbar-toggler" type="button">
            <span
              className="navbar-toggler-icon"
              onClick={() => {
                if (collapse === "") {
                  setCollapse("collapse");
                } else {
                  setCollapse("");
                }
              }}
            ></span>
          </button>
          <div className={`${collapse} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <NavItem url="/#beranda">Home</NavItem>
              <NavItem url="/#fitur">Users</NavItem>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
