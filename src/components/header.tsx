import React from "react";
import Container from "./container";
import Navbar from "./navbar";
import { Link } from "react-router";

const Header = () => {
  return (
    <header
      className="
        sticky
        top-0
        left-0
        w-full
        py-3
        border-b
        z-40
        bg-gradient-to-b from-gray-900/95 to-gray-900/75
        backdrop-blur-sm
        border-gray-700/50
        animate-header-translate
      "
    >
      <Container>
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <Link
            to="/"
            className="
              relative
              cursor-pointer
            "
          >
            <div
              className="
                absolute
                w-10
                h-10
                shadow-md
                shadow-sky-400
                hover:shadow-none
                rounded-full
                -z-50
              "
            ></div>
            <img
              src={"/images/logo.png"}
              alt="logo"
              className="
                w-10
                h-10
                rounded-full
                hover:shadow-circle-glow
                hover:scale-110
                transition-all
              "
            />
          </Link>
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
