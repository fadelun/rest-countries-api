import React from "react";
import IconMoon from "../images/moon-outline.svg";

function Header() {
  return (
    <header className="fixed inset-x-0 top-0">
      <nav className="shadow-md bg-white py-4">
        <div className="w-5/6 mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-extrabold ">Where in the world?</h1>
          <button id="toggle-btn" className="flex justify-center">
            <img src={IconMoon} alt="moon-icon" width={16} />
            <p className="font-semibold ml-3">Dark Mode</p>
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
