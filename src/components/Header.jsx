import React from "react";

const Header = () => {
  return (
    <header className="w-full py-2 px-4 mt-2 flex">
      <nav className="flex w-full px-2 justify-between">
        <div className="text-sm uppercase">Skinstric <span className="text-sm uppercase text-gray-400">[ Intro ]</span></div>

        <button className="text-xs uppercase bg-black text-white px-4 py-2 hover:cursor-pointer">Enter code</button>
      </nav>
    </header>
  );
};

export default Header;