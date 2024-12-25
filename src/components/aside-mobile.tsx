import React, { useCallback } from "react";
import useNavbar from "../hooks/useNavbar";
import { MdClose } from "react-icons/md";
import { navLink } from "../data/navlink";
import { NavLink } from "react-router";

const AsideMobile = () => {
  const navbar = useNavbar();

  const closeNavbar = useCallback(() => {
    navbar.onClose();
  }, [navbar]);

  return (
    <aside
      className={`
        h-full
        w-[300px]
        fixed
        ${
          navbar.isOpen ? "right-0 duration-300" : "-right-[300px] duration-300"
        }
        top-0
        bg-gradient-to-b
        from-gray-900/95
        to-gray-900/75
        border-l-gray-700/30
        md:hidden
        z-50
      `}
    >
      <div
        className="
          h-[65px]
          border-b
          border-gray-700/30
          py-2
          px-4
          flex
          items-center
          justify-end
        "
      >
        <div
          className="
            py-1
            px-2
            rounded-lg
            bg-gray-800/30
            hover:bg-gray-800/70
            transition
            cursor-pointer
          "
          onClick={closeNavbar}
        >
          <MdClose size={28} color="white" />
        </div>
      </div>
      <nav
        className="
          flex
          flex-col
          mt-4
          gap-y-4
          px-4
        "
      >
        {navLink.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              isActive
                ? "text-lg w-full block bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-white px-2 py-1 rounded-lg translate-y-2 transition-transform font-semibold shadow-md"
                : "text-lg w-full block text-gray-300 px-2 py-1 hover:translate-x-2 transition-transform font-semibold"
            }
            onClick={closeNavbar}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AsideMobile;
