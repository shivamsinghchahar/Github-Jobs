import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import DarkModeToggler from "../DarkMode/DarkModeToggler";

function Header({ dark }) {
  return (
    <header
      className={`${
        dark ? "bg-blue-800" : "bg-white"
      } shadow flex justify-center items-center`}
    >
      <nav className="w-full lg:w-4/6 flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center flex-shrink-0 text-gray-800 mr-6">
          <Link
            to="/"
            className={`${
              dark ? "text-white hover:text-gray-200" : "hover:text-gray-700"
            } font-bold text-xl tracking-tight cursor-pointer`}
          >
            GitHub Jobs
          </Link>
        </div>
        <div className="block all:flex all:items-center all:justify-end w-auto">
          <DarkModeToggler />
        </div>
      </nav>
    </header>
  );
}

const mapStateToProps = (state) => ({
  dark: state.theme.dark,
});

export default connect(mapStateToProps)(Header);
