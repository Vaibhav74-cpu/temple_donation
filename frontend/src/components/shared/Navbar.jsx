import { Menu, Underline, X } from "lucide-react";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" top-0 z-40 bg-white/80  backdrop-blur-md lg:sticky lg:top-0 lg:z-40">
      <div className="flex max-w-7xl justify-between h-16 mx-auto items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#7b2a0d]">
            Ganesh Mandir
          </h1>
        </div>
        <div className="md:block hidden font-serif ">
          <ul className="flex gap-7 font-semibold text-lg text-[#B7410E]">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/puja"
                className={({ isActive }) =>
                  isActive ? "underline" : "hover:underline"
                }
              >
                PUJA{" "}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dan"
                className={({ isActive }) =>
                  isActive ? "underline" : " hover:underline"
                }
              >
                DAN
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {open && (
        <ul className="flex flex-col gap-6 py-2 px-2 font-semibold text-lg text-[#B7410E]">
          <li>
            <Link
              to="/"
              className="block hover:underline"
              onClick={() => setOpen(false)}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/puja"
              className="block hover:underline"
              onClick={() => setOpen(false)}
            >
              PUJA{" "}
            </Link>
          </li>
          <li>
            <Link
              to="/dan"
              className="w-full hover:underline"
              onClick={() => setOpen(false)}
            >
              DAN
            </Link>
          </li>
          {/* <li>
            <NavLink
              to="/admin/login"
              className={({ isActive }) =>
                isActive ? "underline" : " hover:underline"
              }
            >
              ADMIN
            </NavLink>
          </li> */}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
