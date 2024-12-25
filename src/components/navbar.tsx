import React, { useCallback, useState } from "react";
import { NavLink } from "react-router";
import { navLink } from "../data/navlink";
import { MdMenu } from "react-icons/md";
import useNavbar from "../hooks/useNavbar";

const Navbar = () => {
  const [navbarState, setNavbarState] = useState(false);
  const navbar = useNavbar();

  const openNavbar = useCallback(() => {
    setNavbarState(true);
    navbar.onOpen();
  }, [setNavbarState, navbar]);

  return (
    <nav>
      <div
        className="
        md:flex
        hidden
        items-center
        gap-x-6
      "
      >
        {navLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-white px-2 py-1 rounded-lg -translate-y-1 transition-transform font-semibold shadow-md"
                : "text-gray-300 px-2 py-1 hover:-translate-y-1 transition-transform font-semibold"
            }
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <div
        className="
          ml-auto
          w-fit
          h-fit
          py-1
          px-2
          rounded-lg
          bg-gray-800/30
          hover:bg-gray-800/70
          transition
          cursor-pointer
          md:hidden
          block
        "
        onClick={openNavbar}
      >
        <MdMenu size={28} color="white" />
      </div>
    </nav>
  );
};

export default Navbar;
