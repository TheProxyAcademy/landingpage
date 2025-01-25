import React, { useState, useEffect } from "react";
import Logo from "../assets/icon.svg";
import { Link } from "react-router-dom";
function Nav() {
  const [stickyClass, setStickyClass] = useState("relative");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 500
        ? setStickyClass(
            "fixed top-0 left-0 z-10 flex justify-between bg-white w-full shadow-md bg-opacity-90 backdrop-blur-md transition-all duration-500 ease-in-out mx-auto"
          )
        : setStickyClass("relative");
    }
  };

  return (
    <div
      className={`lg:px-20 px-10 py-2 flex justify-between items-center max-w-[1440px] container ${stickyClass}`}
    >
      <Link to="/">
        <img
          src={Logo}
          alt="Proxy Academy&gt;s Logo icon"
          className="h-[50px]"
        />
      </Link>
      <Link
        className="px-8 py-3 uppercase font-semibold text-xs rounded-full bg-primary text-light hover:shadow-md hover:scale-110 transition-all duration-300 ease-linear"
        //target="_blank"
        //to="https://docs.google.com/forms/d/e/1FAIpQLScgv-0ZAajAhevEJV4cBQ4ASqKqKUyW-McVFlj4_i2nCVu2dA/viewform"
        to="/register"
      >
        Enrol
      </Link>
    </div>
  );
}

export default Nav;
